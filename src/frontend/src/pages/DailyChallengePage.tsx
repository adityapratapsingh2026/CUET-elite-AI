import {
  CheckCircle2,
  ChevronRight,
  Clock,
  Copy,
  Flame,
  RotateCcw,
  Star,
  Trophy,
  XCircle,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { GoldButton } from "../components/ui/GoldButton";
import { toast } from "../components/ui/Toast";
import { getQuestionsBySubject } from "../data/questions";
import { useGameState } from "../hooks/useGameState";
import type { QuizQuestion } from "../types";
import { playCorrect, playWrong } from "../utils/sounds";

// ─── Constants ────────────────────────────────────────────────────────────────
type Phase = "intro" | "quiz" | "result";

const DAILY_SUBJECTS = [
  "English",
  "BusinessStudies",
  "Accounts",
  "Maths",
  "GeneralTest",
] as const;
const QUESTIONS_PER_CHALLENGE = 5;
const QUESTION_TIME = 30;

const STREAK_MESSAGES: { min: number; message: string; emoji: string }[] = [
  {
    min: 30,
    message: "Legendary! You are unstoppable. CUET is yours!",
    emoji: "👑",
  },
  {
    min: 14,
    message: "Two weeks strong! You're on fire — keep blazing!",
    emoji: "🔥",
  },
  {
    min: 7,
    message: "A full week of dedication. You're building mastery!",
    emoji: "⚔️",
  },
  {
    min: 3,
    message: "Three days in a row — momentum is building!",
    emoji: "⚡",
  },
  {
    min: 1,
    message: "Great start! Come back tomorrow to build your streak.",
    emoji: "🌱",
  },
  {
    min: 0,
    message: "Start today. Every topper began with a single day.",
    emoji: "💪",
  },
];

function getStreakMessage(streak: number) {
  return (
    STREAK_MESSAGES.find((m) => streak >= m.min) ??
    STREAK_MESSAGES[STREAK_MESSAGES.length - 1]
  );
}

// ─── Daily question seeding ───────────────────────────────────────────────────
function getDailyQuestions(): QuizQuestion[] {
  const today = new Date().toDateString();
  const seed = today.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const subjectIdx = seed % DAILY_SUBJECTS.length;
  const subject = DAILY_SUBJECTS[subjectIdx];
  const pool = getQuestionsBySubject(subject);
  const shuffled = [...pool].sort(() => Math.sin(seed) - 0.5);
  return shuffled.slice(0, QUESTIONS_PER_CHALLENGE);
}

function getTodayKey(): string {
  return `daily-${new Date().toDateString()}`;
}

// 30-day calendar (gold = completed, grey = missed)
function buildChallengeCalendar(
  completedDays: string[],
): { label: string; completed: boolean }[] {
  const today = new Date();
  return Array.from({ length: 30 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (29 - i));
    const key = `daily-${d.toDateString()}`;
    return {
      label: d.toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
      completed: completedDays.includes(key),
    };
  });
}

// ─── Component ────────────────────────────────────────────────────────────────
export function DailyChallengePage() {
  const { gameState, completeChallenge, addXP } = useGameState();
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions] = useState<QuizQuestion[]>(getDailyQuestions);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const todayKey = getTodayKey();
  const alreadyCompleted = gameState.completedChallenges.includes(todayKey);
  const streak = gameState.streak;
  const streakMsg = getStreakMessage(streak);
  const calendarData = buildChallengeCalendar(gameState.completedChallenges);

  // ─── Handlers ──────────────────────────────────────────────────────────────
  const handleAnswer = useCallback(
    (idx: number) => {
      if (revealed) return;
      setSelected(idx);
      setRevealed(true);
      const correct = idx === questions[currentIdx]?.correctIndex;
      if (correct) {
        playCorrect();
        setScore((s) => s + 1);
        setAnswers((a) => [...a, true]);
      } else {
        playWrong();
        setAnswers((a) => [...a, false]);
      }
    },
    [revealed, questions, currentIdx],
  );

  const handleNext = useCallback(() => {
    if (currentIdx + 1 >= questions.length) {
      setAnswers((prevAnswers) => {
        const finalAnswers =
          revealed && selected !== null
            ? prevAnswers.length < questions.length
              ? [
                  ...prevAnswers,
                  selected === questions[currentIdx]?.correctIndex,
                ]
              : prevAnswers
            : prevAnswers;
        const finalScore = finalAnswers.filter(Boolean).length;
        const xp = finalScore * 20 + 30;
        addXP(xp);
        completeChallenge(todayKey);
        toast(`🔥 Daily Challenge complete! +${xp} XP earned!`, "success");
        return finalAnswers;
      });
      setPhase("result");
    } else {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setRevealed(false);
      setTimeLeft(QUESTION_TIME);
    }
  }, [
    currentIdx,
    questions,
    revealed,
    selected,
    addXP,
    completeChallenge,
    todayKey,
  ]);

  // Countdown timer
  useEffect(() => {
    if (phase !== "quiz" || revealed) return;
    if (timeLeft <= 0) {
      handleAnswer(-1);
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [phase, revealed, timeLeft, handleAnswer]);

  const current = questions[currentIdx];
  const accuracy =
    questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const finalXP = score * 20 + 30;

  // Share streak
  const handleShare = () => {
    const text = `🔥 ${streak}-day CUET study streak on CUET ELITE AI! Daily challenge crushed today. Join me! 📚 #CUETPrep`;
    navigator.clipboard
      .writeText(text)
      .then(() => toast("Streak copied to clipboard!", "success"));
  };

  // ─── Already completed ──────────────────────────────────────────────────────
  if (alreadyCompleted && phase === "intro") {
    return (
      <div className="min-h-screen py-16 px-4 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full space-y-5"
        >
          <GlassCard gold className="p-8 text-center">
            <div className="text-5xl mb-4">🏆</div>
            <h2 className="font-display font-bold text-2xl text-accent mb-1">
              Today's Challenge Complete!
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              You've already crushed today's challenge. Come back tomorrow!
            </p>

            {/* Streak hero */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="text-4xl">{streakMsg.emoji}</div>
              <div>
                <p className="font-display font-bold text-5xl text-accent leading-none">
                  {streak}
                </p>
                <p className="text-sm text-muted-foreground">day streak</p>
              </div>
            </div>

            <p className="text-sm text-foreground/80 italic mb-6">
              {streakMsg.message}
            </p>

            <GoldButton
              variant="outline"
              className="w-full"
              onClick={handleShare}
              data-ocid="share-streak-btn"
            >
              <Copy className="w-4 h-4" /> Share My Streak
            </GoldButton>
          </GlassCard>

          {/* Calendar */}
          <GlassCard className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-4 h-4 text-orange-400" />
              <h3 className="font-semibold text-sm font-display">
                30-Day Challenge Calendar
              </h3>
            </div>
            <CalendarGrid data={calendarData} />
          </GlassCard>
        </motion.div>
      </div>
    );
  }

  // ─── Main flow ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {/* ── Intro ──────────────────────────────────────────────────────── */}
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-5"
            >
              {/* Header */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Flame className="w-7 h-7 text-orange-400" />
                  <h1 className="font-display font-bold text-3xl">
                    Daily Challenge
                  </h1>
                  <Flame className="w-7 h-7 text-orange-400" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {QUESTIONS_PER_CHALLENGE} questions · {QUESTION_TIME}s each ·
                  new challenge every day
                </p>
              </div>

              {/* Streak Hero */}
              <GlassCard gold className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-orange-400/10 border border-orange-400/30 flex items-center justify-center text-3xl">
                      🔥
                    </div>
                    <div>
                      <p className="font-display font-bold text-4xl text-accent leading-none">
                        {streak}
                      </p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Current streak
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground mb-1">
                      Best streak
                    </p>
                    <p className="font-bold text-xl text-foreground">
                      {Math.max(streak, 7)}
                    </p>
                    <p className="text-xs text-muted-foreground">days</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/40">
                  <p className="text-sm text-foreground/80 italic">
                    {streakMsg.emoji} {streakMsg.message}
                  </p>
                </div>
              </GlassCard>

              {/* Challenge details */}
              <GlassCard className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-5">
                  {[
                    {
                      icon: Star,
                      label: "Questions",
                      value: String(QUESTIONS_PER_CHALLENGE),
                      color: "text-accent",
                    },
                    {
                      icon: Clock,
                      label: "Per Question",
                      value: `${QUESTION_TIME}s`,
                      color: "text-blue-400",
                    },
                    {
                      icon: Zap,
                      label: "Max XP",
                      value: "+130",
                      color: "text-yellow-400",
                    },
                  ].map(({ icon: Icon, label, value, color }) => (
                    <div
                      key={label}
                      className="text-center p-3 rounded-xl bg-muted/20"
                    >
                      <Icon className={`w-5 h-5 ${color} mx-auto mb-1`} />
                      <div className="text-xl font-bold text-foreground">
                        {value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>

                <GoldButton
                  className="w-full"
                  size="lg"
                  onClick={() => {
                    setPhase("quiz");
                    setTimeLeft(QUESTION_TIME);
                  }}
                  data-ocid="start-daily-challenge"
                >
                  Start Challenge <ChevronRight className="w-4 h-4" />
                </GoldButton>
              </GlassCard>

              {/* Calendar */}
              <GlassCard className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <h3 className="font-semibold text-sm font-display">
                    30-Day Challenge History
                  </h3>
                </div>
                <CalendarGrid data={calendarData} />
              </GlassCard>
            </motion.div>
          )}

          {/* ── Quiz ───────────────────────────────────────────────────────── */}
          {phase === "quiz" && current && (
            <motion.div
              key={`quiz-${currentIdx}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="space-y-5"
            >
              {/* Progress dots + timer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {questions.map((q, qi) => {
                    const isAnswered = qi < answers.length;
                    const wasCorrect = answers[qi];
                    return (
                      <span
                        key={q.id}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          isAnswered
                            ? wasCorrect
                              ? "bg-green-400"
                              : "bg-red-400"
                            : qi === currentIdx
                              ? "bg-accent border-2 border-accent/50"
                              : "bg-muted"
                        }`}
                      />
                    );
                  })}
                </div>
                <div
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono font-bold text-sm border ${
                    timeLeft <= 10
                      ? "border-red-500/40 text-red-400 bg-red-500/10 pulse-accent"
                      : "border-accent/30 text-accent bg-accent/10"
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  {timeLeft}s
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 rounded-full bg-muted/30 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent to-yellow-400 rounded-full"
                  animate={{
                    width: `${(currentIdx / QUESTIONS_PER_CHALLENGE) * 100}%`,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Question card */}
              <GlassCard className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full border border-accent/30 text-accent bg-accent/10">
                    {current.subject === "BusinessStudies"
                      ? "Business"
                      : current.subject === "GeneralTest"
                        ? "GAT"
                        : current.subject}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {current.topic}
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {currentIdx + 1} / {QUESTIONS_PER_CHALLENGE}
                  </span>
                </div>

                <p className="font-medium text-lg leading-relaxed mb-6 text-foreground">
                  {current.question}
                </p>

                <div className="space-y-3">
                  {current.options.map((option, i) => {
                    let cls =
                      "border-border/40 bg-muted/10 hover:border-accent/40 hover:bg-accent/5";
                    if (revealed) {
                      if (i === current.correctIndex)
                        cls =
                          "border-green-500/60 bg-green-500/10 text-green-300";
                      else if (i === selected && i !== current.correctIndex)
                        cls = "border-red-500/60 bg-red-500/10 text-red-300";
                      else cls = "border-border/20 bg-muted/5 opacity-50";
                    } else if (selected === i) {
                      cls = "border-accent/60 bg-accent/10";
                    }
                    return (
                      <button
                        key={option}
                        type="button"
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-3 ${cls}`}
                        onClick={() => handleAnswer(i)}
                        disabled={revealed}
                        data-ocid={`option-${i}`}
                      >
                        <span className="w-7 h-7 rounded-full border border-current flex items-center justify-center text-xs font-bold shrink-0">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="text-sm">{option}</span>
                        {revealed && i === current.correctIndex && (
                          <CheckCircle2 className="w-4 h-4 ml-auto text-green-400 shrink-0" />
                        )}
                        {revealed &&
                          i === selected &&
                          i !== current.correctIndex && (
                            <XCircle className="w-4 h-4 ml-auto text-red-400 shrink-0" />
                          )}
                      </button>
                    );
                  })}
                </div>

                {/* AI Explanation */}
                <AnimatePresence>
                  {revealed && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-5 p-4 rounded-xl border border-accent/20 bg-accent/5"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-base">💡</span>
                        <p className="text-xs font-semibold text-accent">
                          AI Step-by-Step Explanation
                        </p>
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {current.explanation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>

              {/* XP flash + next button */}
              <AnimatePresence>
                {revealed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    {selected === current.correctIndex && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center justify-center gap-2 py-2 rounded-xl bg-accent/10 border border-accent/20"
                      >
                        <Zap className="w-4 h-4 text-accent" />
                        <span className="text-sm font-bold text-accent">
                          +20 XP earned!
                        </span>
                      </motion.div>
                    )}
                    <GoldButton
                      className="w-full"
                      size="lg"
                      onClick={handleNext}
                      data-ocid="next-question"
                    >
                      {currentIdx + 1 >= questions.length
                        ? "See Results"
                        : "Next Question"}
                      <ChevronRight className="w-4 h-4" />
                    </GoldButton>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* ── Results ────────────────────────────────────────────────────── */}
          {phase === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-5"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="text-6xl mb-3"
                >
                  {score >= 4 ? "🏆" : score >= 2 ? "⭐" : "💪"}
                </motion.div>
                <h2 className="font-display font-bold text-3xl mb-1">
                  {score >= 4
                    ? "Outstanding!"
                    : score >= 2
                      ? "Well Done!"
                      : "Keep Practicing!"}
                </h2>
                <p className="text-muted-foreground text-sm">
                  Daily challenge completed for today
                </p>
              </div>

              {/* Stats */}
              <GlassCard gold className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    {
                      label: "Score",
                      value: `${score}/${questions.length}`,
                      icon: Trophy,
                      color: "text-accent",
                    },
                    {
                      label: "Accuracy",
                      value: `${accuracy}%`,
                      icon: CheckCircle2,
                      color: "text-green-400",
                    },
                    {
                      label: "XP Earned",
                      value: `+${finalXP}`,
                      icon: Zap,
                      color: "text-yellow-400",
                    },
                  ].map(({ label, value, icon: Icon, color }) => (
                    <div
                      key={label}
                      className="text-center p-4 rounded-xl bg-muted/20"
                    >
                      <Icon className={`w-5 h-5 ${color} mx-auto mb-1`} />
                      <motion.p
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-bold text-foreground"
                      >
                        {value}
                      </motion.p>
                      <p className="text-xs text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Question breakdown */}
                <div className="space-y-2 mb-5">
                  {questions.map((q, i) => (
                    <div
                      key={q.id}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/10"
                    >
                      {answers[i] ? (
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                      )}
                      <p className="text-sm text-foreground/80 truncate flex-1 min-w-0">
                        {q.question}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Streak update */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <Flame className="w-5 h-5 text-orange-400 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-orange-300">
                      🔥 Streak extended to {streak} days!
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Come back tomorrow to keep it going.
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-3">
                <GoldButton
                  variant="outline"
                  className="w-full"
                  onClick={handleShare}
                  data-ocid="share-streak-result"
                >
                  <Copy className="w-4 h-4" /> Share Streak
                </GoldButton>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border/40 text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors text-sm"
                  onClick={() => setPhase("intro")}
                  data-ocid="view-challenge-again"
                >
                  <RotateCcw className="w-4 h-4" />
                  Review
                </button>
              </div>

              {/* 30-day calendar */}
              <GlassCard className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <h3 className="font-semibold text-sm font-display">
                    30-Day Challenge Calendar
                  </h3>
                </div>
                <CalendarGrid
                  data={buildChallengeCalendar(gameState.completedChallenges)}
                />
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── CalendarGrid sub-component ───────────────────────────────────────────────
function CalendarGrid({
  data,
}: { data: { label: string; completed: boolean }[] }) {
  return (
    <>
      <div className="grid grid-cols-10 gap-1.5">
        {data.map((day) => (
          <div
            key={day.label}
            title={`${day.label} — ${day.completed ? "Completed ✓" : "Missed"}`}
            className={`aspect-square rounded-md transition-all duration-200 ${
              day.completed
                ? "bg-accent/60 shadow-[0_0_5px_0_rgba(213,175,97,0.4)] border border-accent/50"
                : "bg-muted/30 border border-border"
            }`}
          />
        ))}
      </div>
      <div className="flex items-center gap-5 mt-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-accent/60 border border-accent/50" />
          <span>Completed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-muted/30 border border-border" />
          <span>Missed</span>
        </div>
      </div>
    </>
  );
}
