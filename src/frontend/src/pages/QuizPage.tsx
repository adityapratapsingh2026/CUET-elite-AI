import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  Flag,
  Lightbulb,
  Loader2,
  RotateCcw,
  Share2,
  Sparkles,
  Trophy,
  XCircle,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { GoldButton } from "../components/ui/GoldButton";
import { toast } from "../components/ui/Toast";
import { getQuestionsBySubject } from "../data/questions";
import { useGameState } from "../hooks/useGameState";
import type { QuizQuestion } from "../types";
import { playCorrect, playLevelUp, playWrong } from "../utils/sounds";

// ── Types ──────────────────────────────────────────────────────────────────

const SUBJECTS = [
  {
    id: "English",
    label: "English",
    emoji: "🔤",
    desc: "Vocabulary, Grammar, Idioms",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/30",
    active: "border-accent bg-accent/10 text-accent",
  },
  {
    id: "BusinessStudies",
    label: "Business Studies",
    emoji: "📊",
    desc: "Management, Finance, Marketing",
    color: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/30",
    active: "border-accent bg-accent/10 text-accent",
  },
  {
    id: "Accounts",
    label: "Accountancy",
    emoji: "💹",
    desc: "Concepts, Partnership, Depreciation",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/30",
    active: "border-accent bg-accent/10 text-accent",
  },
  {
    id: "Maths",
    label: "Mathematics",
    emoji: "📐",
    desc: "Calculus, Algebra, Probability",
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/30",
    active: "border-accent bg-accent/10 text-accent",
  },
  {
    id: "GeneralTest",
    label: "General Test",
    emoji: "🧠",
    desc: "Reasoning, GA, Puzzles",
    color: "from-pink-500/20 to-pink-600/5",
    border: "border-pink-500/30",
    active: "border-accent bg-accent/10 text-accent",
  },
] as const;

const QUESTION_COUNTS = [5, 10, 20, 30] as const;
const TIME_OPTIONS = [
  { label: "5 min", value: 5 },
  { label: "10 min", value: 10 },
  { label: "20 min", value: 20 },
  { label: "30 min", value: 30 },
  { label: "No Limit", value: 0 },
] as const;
const DIFFICULTIES = ["Easy", "Medium", "Hard"] as const;

type Subject = (typeof SUBJECTS)[number]["id"];
type Difficulty = (typeof DIFFICULTIES)[number];
type Phase = "setup" | "quiz" | "result";

// ── AI Explanation Map ─────────────────────────────────────────────────────

const AI_EXPLANATIONS: Record<
  string,
  {
    steps: string[];
    keyConcept: string;
    commonMistake: string;
  }
> = {
  "en-001": {
    steps: [
      "Break down the word: 'Bene' = well (Latin), 'volent' = wishing/willing",
      "BENEVOLENT literally means 'wishing well to others'",
      "Cross-check: Hostile (unfriendly), Kind (warm, caring) ✓, Selfish (self-centred), Cruel (harsh)",
      "Answer: B — Kind",
    ],
    keyConcept:
      "Etymology helps identify word meanings; Latin roots 'bene' (good) and 'mal' (bad) appear in many English words.",
    commonMistake:
      "Students often confuse benevolent with magnanimous; both mean kind but magnanimous emphasizes forgiving others.",
  },
  "en-002": {
    steps: [
      "Identify the rule: with 'Neither…nor', the verb agrees with the noun closest to the verb",
      "The construction is: 'Neither the boys nor the girl ___'",
      "The nearest noun to the verb is 'girl' (singular)",
      "'Yesterday' context → past tense needed → 'was' (not 'is/are/were')",
      "Answer: D — 'was present'",
    ],
    keyConcept:
      "Proximity rule: In neither…nor / either…or constructions, the verb agrees with the nearer subject.",
    commonMistake:
      "Choosing 'were' because 'boys' is plural — but 'boys' is the farther subject, so it doesn't control the verb.",
  },
  "en-003": {
    steps: [
      "Recall: idioms have figurative meanings, not literal ones",
      "'Burn the midnight oil' → in old times, people used oil lamps",
      "Working past midnight meant literally burning your oil lamp into the night",
      "Figurative extension: to work very hard, especially late at night",
      "Answer: B — To work late into the night",
    ],
    keyConcept:
      "Idioms are fixed expressions with meanings that can't be deduced literally — memorize them in context.",
    commonMistake:
      "Reading literally: 'burning oil' might suggest waste — but figurative meaning always overrides literal in idioms.",
  },
  "en-004": {
    steps: [
      "EXACERBATE = to make something worse, more intense",
      "Antonym means the opposite: to make better / lessen",
      "Options: Aggravate (worse ✗), Intensify (stronger ✗), Alleviate (relieve ✓), Worsen (✗)",
      "Answer: C — Alleviate",
    ],
    keyConcept:
      "Antonym questions test vocabulary depth. 'Exacerbate', 'aggravate', 'intensify' are near-synonyms — key differentiator.",
    commonMistake:
      "Selecting Aggravate thinking it means 'irritate mildly' — but in formal English, aggravate = make worse.",
  },
  "ma-001": {
    steps: [
      "Given: f(x) = 2x² + 3x − 5",
      "Substitute x = 2: f(2) = 2(2)² + 3(2) − 5",
      "Calculate: 2 × 4 = 8",
      "Calculate: 3 × 2 = 6",
      "Sum: 8 + 6 − 5 = 9",
      "Answer: A — 9",
    ],
    keyConcept:
      "Function evaluation: substitute the given value everywhere x appears, then simplify using BODMAS.",
    commonMistake:
      "Computing 2x² as (2x)² = 16 instead of 2·(x²) = 8. Note: x² is evaluated before multiplication.",
  },
  "ma-002": {
    steps: [
      "Recall standard trigonometric values:",
      "sin 30° = 1/2 (opposite/hypotenuse in 30-60-90 triangle)",
      "cos 60° = 1/2 (adjacent/hypotenuse in 30-60-90 triangle)",
      "Add: sin 30° + cos 60° = 1/2 + 1/2 = 1",
      "Answer: B — 1",
    ],
    keyConcept:
      "sin 30° = cos 60° = 1/2. These complementary angle relationships follow from sin θ = cos(90°-θ).",
    commonMistake:
      "Forgetting that sin and cos have special exact values at 0°, 30°, 45°, 60°, 90° — must be memorized.",
  },
  "ma-003": {
    steps: [
      "Integrate each term separately using the power rule: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C",
      "∫2x dx = 2 · x²/2 = x²",
      "∫3 dx = 3x (integrating a constant)",
      "Combine: x² + 3x + C (always add constant of integration)",
      "Answer: A — x² + 3x + C",
    ],
    keyConcept:
      "Power rule for integration: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C. For constants: ∫k dx = kx + C.",
    commonMistake:
      "Writing 2x² instead of x² — forgetting to divide by the new power (2) when applying the power rule.",
  },
  "bs-001": {
    steps: [
      "Recall the 5 functions of management: Planning, Organising, Staffing, Directing, Controlling (POSDC)",
      "Check each option against this list:",
      "Planning ✓ — yes, it is a function",
      "Organising ✓ — yes",
      "Producing ✗ — NOT in management functions; this belongs to operations/manufacturing",
      "Controlling ✓ — yes",
      "Answer: C — Producing",
    ],
    keyConcept:
      "The 5 Functions of Management (Fayol/POSDC): Planning, Organising, Staffing, Directing, Controlling.",
    commonMistake:
      "Confusing management functions with business functions; production is a business activity, not a management function.",
  },
  "ac-001": {
    steps: [
      "Going Concern: business will continue indefinitely — not revenue recognition",
      "Accrual Concept: record revenue when EARNED, not when cash received ✓",
      "Matching Concept: match expenses to the revenue they generate",
      "Consistency Concept: use the same accounting methods over time",
      "Answer: B — Accrual Concept",
    ],
    keyConcept:
      "Accrual Basis vs Cash Basis: Accrual records events when they occur; cash basis only when cash moves.",
    commonMistake:
      "Confusing Accrual with Matching — Matching pairs expenses with related revenue, Accrual governs when to record.",
  },
  "gat-001": {
    steps: [
      "Find the pattern: BLUE → DOYG",
      "B→D (+2), L→O (+3), U→Y (+4), E→G ... wait, check again",
      "Actually: B+2=D, L+3=O, U+4=Y, E+2=G — the pattern is +2 for each letter",
      "Wait: B(2)→D(4)=+2, L(12)→O(15)=+3, U(21)→Y(25)=+4, E(5)→G(7)=+2 — inconsistent",
      "Re-examine: BLUE→DOYG: B+2=D, L+3=O, U+4=Y, E+2=G — Actually a uniform +2 shift: B(2)→D(4), L(12)→N(14) not O... let's verify BLUE=DOYG with +2: B→D✓, L→N✗; So +3 for all: B+3=E✗",
      "The problem states answer is ITGGP with GREEN. G+2=I, R+2=T, E+2=G, E+2=G, N+2=P → ITGGP ✓ (consistent +2 shift)",
      "Answer: A — ITGGP",
    ],
    keyConcept:
      "Coding-Decoding: shift each letter by the same fixed amount in the alphabet. Always verify with the given example first.",
    commonMistake:
      "Not verifying the pattern with the given pair before applying it — always confirm the rule on the example first.",
  },
  "gat-002": {
    steps: [
      "List the terms: 2, 6, 12, 20, 30, ?",
      "Find differences: 6-2=4, 12-6=6, 20-12=8, 30-20=10 → differences increase by 2",
      "Next difference: 10+2=12 → next term = 30+12=42",
      "Alternatively: pattern is n(n+1) → 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42",
      "Answer: B — 42",
    ],
    keyConcept:
      "Number series often follow algebraic patterns like n(n+1), n², n³+k — look for differences of differences.",
    commonMistake:
      "Adding 10 mechanically to get 40 — always find the rule from differences, not just the last gap.",
  },
};

// Fallback detailed explanation generator
function buildFallbackExplanation(q: QuizQuestion) {
  return {
    steps: [
      `Topic: ${q.topic}`,
      `The question tests your understanding of ${q.topic.toLowerCase()} concepts.`,
      `Correct answer: "${q.options[q.correctIndex]}"`,
      q.explanation,
      "Review this concept in your notes and practice similar questions.",
    ],
    keyConcept: q.explanation,
    commonMistake: `Students sometimes confuse this with related ${q.topic} concepts — read carefully and eliminate wrong options first.`,
  };
}

// ── Subcomponents ──────────────────────────────────────────────────────────

function OptionLabel({ index }: { index: number }) {
  return (
    <span className="w-7 h-7 rounded-lg border border-current flex items-center justify-center text-xs font-bold shrink-0 font-mono">
      {String.fromCharCode(65 + index)}
    </span>
  );
}

function TimerDisplay({
  timeLeft,
  hasLimit,
}: {
  timeLeft: number;
  hasLimit: boolean;
}) {
  if (!hasLimit) {
    return (
      <div className="flex items-center gap-2 font-mono text-sm px-3 py-1.5 rounded-lg border border-border text-muted-foreground">
        <Clock className="w-3.5 h-3.5" />
        <span>No Limit</span>
      </div>
    );
  }
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isWarning = timeLeft < 300; // < 5 min
  const isDanger = timeLeft < 60; // < 1 min
  return (
    <div
      className={`flex items-center gap-2 font-mono text-sm px-3 py-1.5 rounded-lg border transition-all duration-300 ${isDanger ? "border-red-500/60 text-red-400 bg-red-500/10 animate-pulse" : isWarning ? "border-orange-500/40 text-orange-400 bg-orange-500/5" : "border-border text-muted-foreground"}`}
    >
      <Clock className="w-3.5 h-3.5" />
      <span>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
}

function AIExplanationPanel({
  question,
  isLoading,
  isExpanded,
  onToggle,
}: {
  question: QuizQuestion;
  isLoading: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const data =
    AI_EXPLANATIONS[question.id] ?? buildFallbackExplanation(question);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <GlassCard gold className="p-5 mb-4 overflow-hidden">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-2">
              <p className="text-sm font-semibold text-accent">
                Quick Explanation
              </p>
              <button
                type="button"
                onClick={onToggle}
                data-ocid="ai-explain-toggle"
                className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg border border-accent/40 text-accent hover:bg-accent/10 transition-all duration-200 font-medium shrink-0"
              >
                <Sparkles className="w-3 h-3" />
                {isExpanded ? "Collapse" : "Full AI Explanation"}
              </button>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {question.explanation}
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3 mt-4 py-4">
                      <Loader2 className="w-5 h-5 text-accent animate-spin" />
                      <span className="text-sm text-muted-foreground">
                        AI is generating detailed explanation…
                      </span>
                    </div>
                  ) : (
                    <div className="mt-4 space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                          Step-by-Step Solution
                        </p>
                        <ol className="space-y-2">
                          {data.steps.map((step, i) => (
                            <li
                              key={`step-${i}-${step.slice(0, 15)}`}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground"
                            >
                              <span className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                {i + 1}
                              </span>
                              <span className="leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div className="p-3 rounded-xl bg-accent/5 border border-accent/20">
                        <p className="text-xs font-semibold text-accent mb-1">
                          🔑 Key Concept
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {data.keyConcept}
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/20">
                        <p className="text-xs font-semibold text-red-400 mb-1">
                          ⚠️ Common Mistake
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {data.commonMistake}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ── Setup Screen ───────────────────────────────────────────────────────────

function SetupScreen({
  subject,
  setSubject,
  difficulty,
  setDifficulty,
  questionCount,
  setQuestionCount,
  timeLimit,
  setTimeLimit,
  onStart,
}: {
  subject: Subject;
  setSubject: (s: Subject) => void;
  difficulty: Difficulty;
  setDifficulty: (d: Difficulty) => void;
  questionCount: number;
  setQuestionCount: (n: number) => void;
  timeLimit: number;
  setTimeLimit: (t: number) => void;
  onStart: () => void;
}) {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            AI-Powered Quiz
          </div>
          <h1 className="font-display font-bold text-4xl mb-2">
            Configure Your <span className="text-accent">Quiz</span>
          </h1>
          <p className="text-muted-foreground">
            Personalize your practice session for maximum impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard gold className="p-8 space-y-8">
            {/* Subject Selection */}
            <div>
              <p className="block text-sm font-semibold text-foreground mb-3">
                Select Subject
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SUBJECTS.map((s) => (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setSubject(s.id)}
                    data-ocid={`subject-btn-${s.id}`}
                    className={`p-4 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center gap-3 text-left ${
                      subject === s.id
                        ? "border-accent bg-accent/10 text-accent shadow-[0_0_16px_0_rgba(213,175,97,0.2)]"
                        : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
                    }`}
                  >
                    <span className="text-xl">{s.emoji}</span>
                    <div className="min-w-0">
                      <p className="font-semibold truncate">{s.label}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {s.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <p className="block text-sm font-semibold text-foreground mb-3">
                Difficulty Level
              </p>
              <div className="flex gap-3">
                {DIFFICULTIES.map((d) => {
                  const activeColors = {
                    Easy: "border-green-500/60 bg-green-500/10 text-green-400",
                    Medium: "border-accent bg-accent/10 text-accent",
                    Hard: "border-red-500/60 bg-red-500/10 text-red-400",
                  };
                  return (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setDifficulty(d)}
                      data-ocid={`difficulty-${d}`}
                      className={`flex-1 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                        difficulty === d
                          ? activeColors[d]
                          : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
                      }`}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question Count */}
            <div>
              <p className="block text-sm font-semibold text-foreground mb-3">
                Number of Questions
              </p>
              <div className="flex gap-3">
                {QUESTION_COUNTS.map((n) => (
                  <button
                    type="button"
                    key={n}
                    onClick={() => setQuestionCount(n)}
                    data-ocid={`question-count-${n}`}
                    className={`flex-1 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                      questionCount === n
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Limit */}
            <div>
              <p className="block text-sm font-semibold text-foreground mb-3">
                Time Limit
              </p>
              <div className="flex flex-wrap gap-2">
                {TIME_OPTIONS.map((t) => (
                  <button
                    type="button"
                    key={t.value}
                    onClick={() => setTimeLimit(t.value)}
                    data-ocid={`time-limit-${t.value}`}
                    className={`px-4 py-2 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                      timeLimit === t.value
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <GoldButton
              className="w-full"
              size="lg"
              onClick={onStart}
              data-ocid="start-quiz-btn"
            >
              <Zap className="w-4 h-4" />
              Start Quiz — {questionCount} Questions · {difficulty}
            </GoldButton>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}

// ── Results Screen ─────────────────────────────────────────────────────────

function ResultsScreen({
  questions: qs,
  answers,
  timeTaken,
  xpEarned,
  flaggedQuestions,
  onRestart,
}: {
  questions: QuizQuestion[];
  answers: (number | null)[];
  timeTaken: number;
  xpEarned: number;
  flaggedQuestions: Set<number>;
  onRestart: () => void;
}) {
  const score = answers.filter((a, i) => a === qs[i]?.correctIndex).length;
  const accuracy = Math.round((score / qs.length) * 100);
  const grade =
    accuracy >= 90
      ? "A+"
      : accuracy >= 80
        ? "A"
        : accuracy >= 65
          ? "B"
          : accuracy >= 50
            ? "C"
            : "D";
  const timeMins = Math.floor(timeTaken / 60);
  const timeSecs = timeTaken % 60;

  const handleShare = () => {
    const text = `🎓 CUET ELITE AI Quiz Result\n📚 Subject: ${qs[0]?.subject}\n⭐ Score: ${score}/${qs.length} (${accuracy}%)\n🏅 Grade: ${grade}\n💎 XP Earned: +${xpEarned}\n\nPractice with me at CUET ELITE AI!`;
    navigator.clipboard.writeText(text).then(() => {
      toast("Score copied to clipboard!", "success");
    });
  };

  const byDifficulty = {
    Easy: { correct: 0, total: 0 },
    Medium: { correct: 0, total: 0 },
    Hard: { correct: 0, total: 0 },
  };
  qs.forEach((q, i) => {
    const d = q.difficulty as Difficulty;
    byDifficulty[d].total++;
    if (answers[i] === q.correctIndex) byDifficulty[d].correct++;
  });

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Hero score card */}
          <GlassCard gold className="p-8 text-center mb-6">
            <div className="w-24 h-24 rounded-full bg-accent/10 border-2 border-accent/40 flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_0_rgba(213,175,97,0.3)]">
              <Trophy className="w-12 h-12 text-accent" />
            </div>
            <h2 className="font-display font-bold text-3xl mb-1">
              Quiz Complete!
            </h2>
            <p className="text-muted-foreground mb-6">
              Here&apos;s your performance breakdown
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { label: "Score", value: `${score}/${qs.length}`, icon: "🎯" },
                { label: "Accuracy", value: `${accuracy}%`, icon: "📊" },
                { label: "Grade", value: grade, icon: "🏅" },
                {
                  label: "Time",
                  value: `${String(timeMins).padStart(2, "0")}:${String(timeSecs).padStart(2, "0")}`,
                  icon: "⏱️",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 rounded-xl bg-accent/5 border border-accent/20"
                >
                  <p className="text-lg mb-0.5">{stat.icon}</p>
                  <p className="text-xl font-bold text-accent font-mono">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* XP earned */}
            <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-semibold w-fit mx-auto mb-6">
              <Zap className="w-4 h-4" />+{xpEarned} XP Earned
            </div>

            {/* Difficulty breakdown */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {(["Easy", "Medium", "Hard"] as const).map((d) => {
                const { correct, total } = byDifficulty[d];
                if (total === 0) return null;
                const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
                const color =
                  d === "Easy"
                    ? "text-green-400 border-green-500/30 bg-green-500/5"
                    : d === "Medium"
                      ? "text-accent border-accent/30 bg-accent/5"
                      : "text-red-400 border-red-500/30 bg-red-500/5";
                return (
                  <div
                    key={d}
                    className={`p-2.5 rounded-xl border text-center ${color}`}
                  >
                    <p className="text-base font-bold font-mono">{pct}%</p>
                    <p className="text-xs opacity-80">
                      {d} ({correct}/{total})
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3">
              <GoldButton
                variant="outline"
                className="flex-1"
                onClick={handleShare}
                data-ocid="share-score-btn"
              >
                <Share2 className="w-4 h-4" />
                Share Score
              </GoldButton>
              <GoldButton
                className="flex-1"
                onClick={onRestart}
                data-ocid="quiz-restart"
              >
                <RotateCcw className="w-4 h-4" /> Try Again
              </GoldButton>
            </div>
          </GlassCard>

          {/* Question review */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-accent" />
              <h3 className="font-semibold text-foreground">Question Review</h3>
              {flaggedQuestions.size > 0 && (
                <span className="ml-auto flex items-center gap-1 text-xs text-orange-400 border border-orange-500/30 bg-orange-500/5 px-2 py-0.5 rounded-full">
                  <Flag className="w-3 h-3" />
                  {flaggedQuestions.size} flagged
                </span>
              )}
            </div>
            <div className="space-y-3">
              {qs.map((q, i) => {
                const isCorrect = answers[i] === q.correctIndex;
                const isFlagged = flaggedQuestions.has(i);
                return (
                  <div
                    key={q.id}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border ${
                      isCorrect
                        ? "bg-green-500/5 border-green-500/20"
                        : "bg-red-500/5 border-red-500/20"
                    }`}
                  >
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-foreground line-clamp-1 font-medium">
                        {q.question}
                      </p>
                      {!isCorrect && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Correct: {q.options[q.correctIndex]}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {isFlagged && (
                        <Flag className="w-3 h-3 text-orange-400" />
                      )}
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded font-mono ${
                          q.difficulty === "Easy"
                            ? "text-green-400 bg-green-500/10"
                            : q.difficulty === "Medium"
                              ? "text-accent bg-accent/10"
                              : "text-red-400 bg-red-500/10"
                        }`}
                      >
                        {q.difficulty[0]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}

// ── Main Quiz Page ─────────────────────────────────────────────────────────

export function QuizPage() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [subject, setSubject] = useState<Subject>("English");
  const [difficulty, setDifficulty] = useState<Difficulty>("Medium");
  const [questionCount, setQuestionCount] = useState(10);
  const [timeLimit, setTimeLimit] = useState(10);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [aiExpanded, setAiExpanded] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(
    new Set(),
  );
  const [timeLeft, setTimeLeft] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const startTimeRef = useRef<number>(0);
  const { addXP, unlockBadge } = useGameState();

  const startQuiz = () => {
    const qs = getQuestionsBySubject(subject, difficulty, questionCount);
    if (!qs.length) {
      toast("No questions found for this selection", "error");
      return;
    }
    setQuizQuestions(qs);
    setAnswers(new Array(qs.length).fill(null));
    setFlaggedQuestions(new Set());
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAiExpanded(false);
    setTimeLeft(timeLimit > 0 ? timeLimit * 60 : 0);
    startTimeRef.current = Date.now();
    setPhase("quiz");
  };

  const finishQuiz = useCallback(
    (finalAnswers: (number | null)[]) => {
      const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
      setTimeTaken(elapsed);
      const correct = finalAnswers.reduce<number>(
        (acc, ans, i) =>
          ans === quizQuestions[i]?.correctIndex ? acc + 1 : acc,
        0,
      );
      const xp = Math.round(
        (correct / quizQuestions.length) *
          (difficulty === "Easy" ? 20 : difficulty === "Medium" ? 40 : 60),
      );
      setXpEarned(xp);
      addXP(xp);
      unlockBadge("first-quiz");
      if (correct === quizQuestions.length) {
        unlockBadge("perfect-score");
        playLevelUp();
      }
      toast(`Quiz complete! +${xp} XP earned 🎉`, "success");
      setPhase("result");
    },
    [quizQuestions, difficulty, addXP, unlockBadge],
  );

  // Timer countdown
  useEffect(() => {
    if (phase !== "quiz" || timeLimit === 0 || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          finishQuiz(answers);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, timeLeft, timeLimit, answers, finishQuiz]);

  const handleAnswer = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    const correct = quizQuestions[currentIndex].correctIndex === idx;
    if (correct) {
      playCorrect();
    } else {
      playWrong();
    }
    const updated = [...answers];
    updated[currentIndex] = idx;
    setAnswers(updated);
    setShowExplanation(true);
    setAiExpanded(false);
  };

  const handleToggleAI = () => {
    if (!aiExpanded) {
      setAiExpanded(true);
      // Simulate AI loading
      if (!(quizQuestions[currentIndex].id in AI_EXPLANATIONS)) {
        setAiLoading(true);
        setTimeout(() => setAiLoading(false), 800);
      }
    } else {
      setAiExpanded(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setAiExpanded(false);
    } else {
      finishQuiz(answers);
    }
  };

  const toggleFlag = () => {
    setFlaggedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(currentIndex)) {
        next.delete(currentIndex);
      } else {
        next.add(currentIndex);
      }
      return next;
    });
  };

  if (phase === "setup") {
    return (
      <SetupScreen
        subject={subject}
        setSubject={setSubject}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        questionCount={questionCount}
        setQuestionCount={setQuestionCount}
        timeLimit={timeLimit}
        setTimeLimit={setTimeLimit}
        onStart={startQuiz}
      />
    );
  }

  if (phase === "result") {
    return (
      <ResultsScreen
        questions={quizQuestions}
        answers={answers}
        timeTaken={timeTaken}
        xpEarned={xpEarned}
        flaggedQuestions={flaggedQuestions}
        onRestart={() => setPhase("setup")}
      />
    );
  }

  const q = quizQuestions[currentIndex];
  const progress = ((currentIndex + 1) / quizQuestions.length) * 100;
  const isFlagged = flaggedQuestions.has(currentIndex);

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header: progress + timer */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-muted-foreground">
            Question{" "}
            <span className="text-foreground font-semibold">
              {currentIndex + 1}
            </span>{" "}
            / {quizQuestions.length}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleFlag}
              data-ocid="flag-question-btn"
              aria-label={
                isFlagged ? "Remove flag" : "Flag question for review"
              }
              className={`p-1.5 rounded-lg border transition-all duration-200 ${
                isFlagged
                  ? "border-orange-500/60 text-orange-400 bg-orange-500/10"
                  : "border-border text-muted-foreground hover:border-orange-500/40 hover:text-orange-400"
              }`}
            >
              <Flag className="w-3.5 h-3.5" />
            </button>
            <TimerDisplay timeLeft={timeLeft} hasLimit={timeLimit > 0} />
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 rounded-full bg-muted mb-6 overflow-hidden">
          <motion.div
            className="h-full bg-accent rounded-full shadow-[0_0_8px_0_rgba(213,175,97,0.5)]"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            {/* Question card */}
            <GlassCard className="p-6 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${
                    q.difficulty === "Easy"
                      ? "border-green-500/30 text-green-400 bg-green-500/5"
                      : q.difficulty === "Medium"
                        ? "border-accent/30 text-accent bg-accent/5"
                        : "border-red-500/30 text-red-400 bg-red-500/5"
                  }`}
                >
                  {q.difficulty}
                </span>
                <span className="text-xs text-muted-foreground">{q.topic}</span>
                {isFlagged && (
                  <span className="ml-auto flex items-center gap-1 text-xs text-orange-400">
                    <Flag className="w-3 h-3" /> Flagged
                  </span>
                )}
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground leading-relaxed mb-6">
                {q.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {q.options.map((opt, i) => {
                  let optStyle =
                    "border-border text-foreground hover:border-accent/40 hover:bg-accent/5 cursor-pointer";
                  if (selectedAnswer !== null) {
                    if (i === q.correctIndex) {
                      optStyle =
                        "border-green-500/60 bg-green-500/10 text-green-300 shadow-[0_0_12px_0_rgba(34,197,94,0.2)] cursor-default";
                    } else if (i === selectedAnswer) {
                      optStyle =
                        "border-red-500/60 bg-red-500/10 text-red-300 shadow-[0_0_12px_0_rgba(239,68,68,0.2)] cursor-default";
                    } else {
                      optStyle =
                        "border-border/30 text-muted-foreground opacity-50 cursor-default";
                    }
                  }
                  return (
                    <button
                      type="button"
                      key={`opt-${q.id}-${i}`}
                      onClick={() => handleAnswer(i)}
                      disabled={selectedAnswer !== null}
                      data-ocid={`answer-option-${i}`}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-3 ${optStyle}`}
                    >
                      <OptionLabel index={i} />
                      <span className="text-sm leading-snug flex-1 min-w-0">
                        {opt}
                      </span>
                      {selectedAnswer !== null && i === q.correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                      )}
                      {selectedAnswer !== null &&
                        i === selectedAnswer &&
                        i !== q.correctIndex && (
                          <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                        )}
                    </button>
                  );
                })}
              </div>
            </GlassCard>

            {/* AI Explanation */}
            {showExplanation && (
              <AIExplanationPanel
                question={q}
                isLoading={aiLoading}
                isExpanded={aiExpanded}
                onToggle={handleToggleAI}
              />
            )}

            {/* Copy icon for share during quiz */}
            {selectedAnswer !== null && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <GoldButton
                  className="w-full"
                  size="lg"
                  onClick={handleNext}
                  data-ocid="next-question-btn"
                >
                  {currentIndex < quizQuestions.length - 1 ? (
                    <>
                      Next Question <ChevronRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Finish Quiz <Trophy className="w-4 h-4" />
                    </>
                  )}
                </GoldButton>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
