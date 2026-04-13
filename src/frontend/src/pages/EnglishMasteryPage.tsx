import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  Filter,
  MessageSquare,
  Repeat2,
  Sparkles,
  Star,
  Trophy,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { GoldButton } from "../components/ui/GoldButton";
import { idioms, phrasalVerbs, vocabulary } from "../data/english";
import { useGameState } from "../hooks/useGameState";

// ── Types ─────────────────────────────────────────────────────────────
type Tab = "vocabulary" | "phrasal" | "idioms" | "quiz";
type DifficultyFilter = "All" | "Easy" | "Medium" | "Hard";

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// ── Persistence ────────────────────────────────────────────────────────
const BOOKMARKS_KEY = "english_bookmarks";
const DAILY_QUIZ_KEY = "english_daily_quiz";
const STREAK_KEY = "english_quiz_streak";

function loadBookmarks(): Set<string> {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
  } catch {
    return new Set();
  }
}
function saveBookmarks(set: Set<string>) {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(Array.from(set)));
}
function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function buildQuizQuestions(): QuizQuestion[] {
  const pool: QuizQuestion[] = [];
  const shuffledV = [...vocabulary].sort(() => Math.random() - 0.5).slice(0, 2);
  for (const w of shuffledV) {
    const wrong = vocabulary
      .filter((v) => v.word !== w.word)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((v) => v.meaning);
    const options = [...wrong, w.meaning].sort(() => Math.random() - 0.5);
    pool.push({
      id: `vocab-${w.word}`,
      question: `What does "${w.word}" mean?`,
      options,
      correctIndex: options.indexOf(w.meaning),
      explanation: `"${w.word}" means: ${w.meaning}. Example: ${w.example}`,
    });
  }
  const shuffledPV = [...phrasalVerbs]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
  for (const pv of shuffledPV) {
    const wrong = phrasalVerbs
      .filter((p) => p.phrase !== pv.phrase)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((p) => p.meaning);
    const options = [...wrong, pv.meaning].sort(() => Math.random() - 0.5);
    pool.push({
      id: `pv-${pv.phrase}`,
      question: `What does "${pv.phrase}" mean?`,
      options,
      correctIndex: options.indexOf(pv.meaning),
      explanation: `"${pv.phrase}": ${pv.meaning}. Example: ${pv.example}`,
    });
  }
  const id = [...idioms].sort(() => Math.random() - 0.5)[0];
  const iWrong = idioms
    .filter((i) => i.phrase !== id.phrase)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((i) => i.meaning);
  const iOpts = [...iWrong, id.meaning].sort(() => Math.random() - 0.5);
  pool.push({
    id: `idiom-${id.phrase}`,
    question: `What does "${id.phrase}" mean?`,
    options: iOpts,
    correctIndex: iOpts.indexOf(id.meaning),
    explanation: `"${id.phrase}": ${id.meaning}. Example: ${id.example}`,
  });
  return pool;
}

// ── Difficulty Badge ───────────────────────────────────────────────────
function DiffBadge({ difficulty }: { difficulty: "Easy" | "Medium" | "Hard" }) {
  const cls = {
    Easy: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    Medium: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    Hard: "bg-red-500/20 text-red-400 border border-red-500/30",
  }[difficulty];
  return (
    <span className={cn("text-xs font-semibold px-2 py-0.5 rounded-full", cls)}>
      {difficulty}
    </span>
  );
}

// ── 3D Flip Card ───────────────────────────────────────────────────────
function VocabFlipCard({
  word,
  isFlipped,
  onFlip,
  bookmarked,
  onBookmark,
}: {
  word: (typeof vocabulary)[0];
  isFlipped: boolean;
  onFlip: () => void;
  bookmarked: boolean;
  onBookmark: () => void;
}) {
  return (
    <div className="w-full max-w-md mx-auto" style={{ perspective: "1200px" }}>
      <div
        className="relative w-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "300px",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <GlassCard
            gold
            className="p-8 h-full flex flex-col items-center justify-center gap-4 relative"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onBookmark();
              }}
              className="absolute top-4 right-4 text-muted-foreground hover:text-accent transition-colors"
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark word"}
            >
              {bookmarked ? (
                <BookmarkCheck className="w-5 h-5 text-accent" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </button>
            <DiffBadge difficulty={word.difficulty} />
            <h2 className="font-display text-5xl font-bold text-foreground tracking-tight text-center">
              {word.word}
            </h2>
            <button
              type="button"
              onClick={onFlip}
              className="mt-2 flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
              aria-label="Flip card"
            >
              <Repeat2 className="w-4 h-4" /> Tap to reveal meaning
            </button>
          </GlassCard>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <GlassCard
            gold
            className="p-6 h-full flex flex-col justify-between gap-3 relative"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onBookmark();
              }}
              className="absolute top-4 right-4 text-muted-foreground hover:text-accent transition-colors"
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark word"}
            >
              {bookmarked ? (
                <BookmarkCheck className="w-5 h-5 text-accent" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </button>
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-1">
                Definition
              </p>
              <p className="text-foreground text-base font-medium leading-snug">
                {word.meaning}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                Example
              </p>
              <p className="text-muted-foreground text-sm italic">
                "{word.example}"
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1">
                  Synonyms
                </p>
                <div className="flex flex-wrap gap-1">
                  {word.synonyms.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded px-1.5 py-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-1">
                  Antonyms
                </p>
                <div className="flex flex-wrap gap-1">
                  {word.antonyms.map((a) => (
                    <span
                      key={a}
                      className="text-xs bg-red-500/10 text-red-400 border border-red-500/20 rounded px-1.5 py-0.5"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={onFlip}
              className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
              aria-label="Flip back"
            >
              <Repeat2 className="w-4 h-4" /> Flip back
            </button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

// ── Vocabulary Tab ─────────────────────────────────────────────────────
function VocabularyTab({
  bookmarks,
  onToggleBookmark,
}: { bookmarks: Set<string>; onToggleBookmark: (k: string) => void }) {
  const [filter, setFilter] = useState<DifficultyFilter>("All");
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? vocabulary
        : vocabulary.filter((w) => w.difficulty === filter),
    [filter],
  );
  const word = filtered[index] ?? filtered[0];
  const learnedCount = useMemo(
    () => vocabulary.filter((w) => bookmarks.has(`vocab-${w.word}`)).length,
    [bookmarks],
  );

  function goTo(i: number) {
    setIsFlipped(false);
    setTimeout(() => setIndex(i), 150);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            <span className="font-semibold text-accent">{learnedCount}</span>/
            {vocabulary.length} bookmarked
          </span>
          <Progress
            value={(learnedCount / vocabulary.length) * 100}
            className="w-28 h-2"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          {(["All", "Easy", "Medium", "Hard"] as DifficultyFilter[]).map(
            (d) => (
              <button
                type="button"
                key={d}
                onClick={() => {
                  setFilter(d);
                  setIndex(0);
                  setIsFlipped(false);
                }}
                data-ocid={`vocab-filter-${d.toLowerCase()}`}
                className={cn(
                  "text-xs px-3 py-1 rounded-full border transition-all duration-200 font-medium",
                  filter === d
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground",
                )}
              >
                {d}
              </button>
            ),
          )}
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Word <span className="text-accent font-semibold">{index + 1}</span> of{" "}
        <span className="font-semibold">{filtered.length}</span>
      </p>
      {word && (
        <VocabFlipCard
          word={word}
          isFlipped={isFlipped}
          onFlip={() => setIsFlipped((f) => !f)}
          bookmarked={bookmarks.has(`vocab-${word.word}`)}
          onBookmark={() => onToggleBookmark(`vocab-${word.word}`)}
        />
      )}
      <div className="flex items-center justify-center gap-4">
        <GoldButton
          variant="outline"
          size="sm"
          onClick={() => goTo(Math.max(0, index - 1))}
          disabled={index === 0}
          data-ocid="vocab-prev"
          aria-label="Previous word"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </GoldButton>
        <span className="text-xs text-muted-foreground">
          {index + 1} / {filtered.length}
        </span>
        <GoldButton
          variant="outline"
          size="sm"
          onClick={() => goTo(Math.min(filtered.length - 1, index + 1))}
          disabled={index === filtered.length - 1}
          data-ocid="vocab-next"
          aria-label="Next word"
        >
          Next <ChevronRight className="w-4 h-4" />
        </GoldButton>
      </div>
      <div className="flex justify-center gap-1.5 flex-wrap">
        {filtered.slice(0, 12).map((w, i) => (
          <button
            type="button"
            key={w.word}
            onClick={() => goTo(i)}
            aria-label={`Go to word ${i + 1}`}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-200",
              i === index
                ? "bg-accent w-4"
                : "bg-border hover:bg-muted-foreground",
            )}
          />
        ))}
        {filtered.length > 12 && (
          <span className="text-xs text-muted-foreground self-center">
            +{filtered.length - 12} more
          </span>
        )}
      </div>
    </div>
  );
}

// ── Phrasal Verbs Tab ──────────────────────────────────────────────────
function PhrasalVerbsTab({
  bookmarks,
  onToggleBookmark,
}: { bookmarks: Set<string>; onToggleBookmark: (k: string) => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const reviewedCount = useMemo(
    () => phrasalVerbs.filter((p) => bookmarks.has(`pv-${p.phrase}`)).length,
    [bookmarks],
  );
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">
          <span className="font-semibold text-accent">{reviewedCount}</span>/
          {phrasalVerbs.length} reviewed
        </span>
        <Progress
          value={(reviewedCount / phrasalVerbs.length) * 100}
          className="w-28 h-2"
        />
      </div>
      <div className="grid gap-3" data-ocid="phrasal-list">
        {phrasalVerbs.map((pv) => {
          const key = `pv-${pv.phrase}`;
          const isOpen = expanded === pv.phrase;
          return (
            <GlassCard
              key={pv.phrase}
              hoverable
              className="p-4 cursor-pointer"
              data-ocid={`pv-${pv.phrase.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={() => setExpanded(isOpen ? null : pv.phrase)}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <MessageSquare className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-semibold text-foreground">
                    {pv.phrase}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(key);
                    }}
                    aria-label={bookmarks.has(key) ? "Remove" : "Bookmark"}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {bookmarks.has(key) ? (
                      <BookmarkCheck className="w-4 h-4 text-accent" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 text-muted-foreground transition-transform duration-200",
                      isOpen && "rotate-90",
                    )}
                  />
                </div>
              </div>
              {!isOpen && (
                <p className="text-sm text-muted-foreground mt-1 ml-7 truncate">
                  {pv.meaning}
                </p>
              )}
              {isOpen && (
                <div className="mt-3 ml-7 space-y-2 slide-up">
                  <p className="text-sm text-foreground">{pv.meaning}</p>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
                      Example
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      "{pv.example}"
                    </p>
                  </div>
                </div>
              )}
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}

// ── Idioms Tab ─────────────────────────────────────────────────────────
function IdiomsTab({
  bookmarks,
  onToggleBookmark,
}: { bookmarks: Set<string>; onToggleBookmark: (k: string) => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const bookmarkedCount = useMemo(
    () => idioms.filter((i) => bookmarks.has(`idiom-${i.phrase}`)).length,
    [bookmarks],
  );
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">
          <span className="font-semibold text-accent">{bookmarkedCount}</span>/
          {idioms.length} bookmarked
        </span>
        <Progress
          value={(bookmarkedCount / idioms.length) * 100}
          className="w-28 h-2"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3" data-ocid="idioms-list">
        {idioms.map((id) => {
          const key = `idiom-${id.phrase}`;
          const isOpen = expanded === id.phrase;
          return (
            <GlassCard
              key={id.phrase}
              hoverable
              className="p-4 cursor-pointer"
              data-ocid={`idiom-${id.phrase.replace(/\s+/g, "-").toLowerCase().slice(0, 30)}`}
              onClick={() => setExpanded(isOpen ? null : id.phrase)}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2 min-w-0">
                  <Star className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm leading-snug">
                      {id.phrase}
                    </p>
                    {!isOpen && (
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                        {id.meaning}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBookmark(key);
                  }}
                  aria-label={bookmarks.has(key) ? "Remove" : "Bookmark"}
                  className="text-muted-foreground hover:text-accent transition-colors shrink-0"
                >
                  {bookmarks.has(key) ? (
                    <BookmarkCheck className="w-3.5 h-3.5 text-accent" />
                  ) : (
                    <Bookmark className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              {isOpen && (
                <div className="mt-3 space-y-2 slide-up">
                  <p className="text-sm text-foreground">{id.meaning}</p>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-2.5">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
                      Usage
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      "{id.example}"
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="text-xs">
                      Idiom
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-accent/30 text-accent"
                    >
                      Figurative
                    </Badge>
                  </div>
                </div>
              )}
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}

// ── Daily Quiz Tab ─────────────────────────────────────────────────────
function DailyQuizTab() {
  const { addXP } = useGameState();
  const [questions] = useState<QuizQuestion[]>(() => {
    const todayKey = getTodayKey();
    try {
      const stored = localStorage.getItem(DAILY_QUIZ_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as {
          date: string;
          questions: QuizQuestion[];
        };
        if (parsed.date === todayKey) return parsed.questions;
      }
    } catch {
      /* ignore */
    }
    const q = buildQuizQuestions();
    localStorage.setItem(
      DAILY_QUIZ_KEY,
      JSON.stringify({ date: getTodayKey(), questions: q }),
    );
    return q;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(5).fill(null),
  );
  const [showResult, setShowResult] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(false);

  const streakCount = useMemo(() => {
    try {
      const raw = localStorage.getItem(STREAK_KEY);
      if (!raw) return 0;
      return (JSON.parse(raw) as { count: number }).count;
    } catch {
      return 0;
    }
  }, []);

  const question = questions[currentIndex];

  function handleSelect(optIdx: number) {
    if (selectedOption !== null) return;
    setSelectedOption(optIdx);
    const updated = [...answers];
    updated[currentIndex] = optIdx;
    setAnswers(updated);
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      const next = answers[currentIndex + 1];
      setSelectedOption(next);
    } else {
      setShowResult(true);
      if (!xpAwarded) {
        const s = answers.filter(
          (a, i) => a === questions[i].correctIndex,
        ).length;
        addXP(s * 10 + (s === questions.length ? 30 : 0));
        setXpAwarded(true);
        try {
          const raw = localStorage.getItem(STREAK_KEY);
          const prev = raw
            ? (JSON.parse(raw) as { count: number; lastDate: string })
            : { count: 0, lastDate: "" };
          const yd = new Date();
          yd.setDate(yd.getDate() - 1);
          const yKey = yd.toISOString().slice(0, 10);
          const nc = prev.lastDate === yKey ? prev.count + 1 : 1;
          localStorage.setItem(
            STREAK_KEY,
            JSON.stringify({ count: nc, lastDate: getTodayKey() }),
          );
        } catch {
          /* ignore */
        }
      }
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      const pi = currentIndex - 1;
      setCurrentIndex(pi);
      setSelectedOption(answers[pi]);
    }
  }

  const score = answers.filter(
    (a, i) => a === questions[i]?.correctIndex,
  ).length;
  const pct = Math.round((score / questions.length) * 100);

  if (showResult) {
    return (
      <div className="max-w-lg mx-auto space-y-6 text-center">
        <GlassCard gold className="p-8 space-y-4">
          <Trophy className="w-12 h-12 text-accent mx-auto" />
          <h3 className="font-display text-3xl font-bold text-foreground">
            {score}/{questions.length}
          </h3>
          <p className="text-muted-foreground">
            Accuracy: <span className="text-accent font-semibold">{pct}%</span>
          </p>
          <div className="text-sm space-y-1">
            {pct === 100 && (
              <p className="text-accent font-semibold">
                🎉 Perfect Score! +30 bonus XP
              </p>
            )}
            <p className="text-muted-foreground">
              +{score * 10}
              {pct === 100 ? " + 30 bonus" : ""} XP earned
            </p>
            <p className="text-muted-foreground flex items-center justify-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-orange-400" /> Streak:{" "}
              <span className="font-semibold text-orange-400">
                {streakCount}
              </span>{" "}
              days
            </p>
          </div>
          <GoldButton
            variant="outline"
            size="sm"
            onClick={() => {
              setCurrentIndex(0);
              setSelectedOption(null);
              setAnswers(Array(5).fill(null));
              setShowResult(false);
            }}
            data-ocid="quiz-retake"
          >
            Retake Quiz
          </GoldButton>
        </GlassCard>
        <div className="space-y-3 text-left">
          <h4 className="font-semibold text-foreground text-sm">
            Review Answers
          </h4>
          {questions.map((q, i) => (
            <GlassCard
              key={q.id}
              className={cn(
                "p-4",
                answers[i] === q.correctIndex
                  ? "border-emerald-500/30"
                  : "border-red-500/30",
              )}
            >
              <p className="text-sm font-medium text-foreground mb-2">
                {i + 1}. {q.question}
              </p>
              <p
                className={cn(
                  "text-xs",
                  answers[i] === q.correctIndex
                    ? "text-emerald-400"
                    : "text-red-400",
                )}
              >
                Your answer: {q.options[answers[i] ?? -1] ?? "—"}
              </p>
              {answers[i] !== q.correctIndex && (
                <p className="text-xs text-emerald-400">
                  Correct: {q.options[q.correctIndex]}
                </p>
              )}
              <p className="text-xs text-muted-foreground mt-2 italic">
                {q.explanation}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    );
  }

  if (!question) return null;

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-orange-400" />
          <span className="text-sm text-muted-foreground">
            Streak:{" "}
            <span className="font-semibold text-orange-400">{streakCount}</span>
          </span>
        </div>
        <div className="flex gap-1">
          {questions.map((q, i) => (
            <div
              key={q.id}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200",
                i === currentIndex
                  ? "bg-accent w-4"
                  : answers[i] !== null
                    ? answers[i] === questions[i].correctIndex
                      ? "bg-emerald-500"
                      : "bg-red-500"
                    : "bg-border",
              )}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1}/{questions.length}
        </span>
      </div>
      <GlassCard gold className="p-6 space-y-2">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest">
          Question {currentIndex + 1}
        </p>
        <p className="font-semibold text-foreground text-lg leading-snug">
          {question.question}
        </p>
      </GlassCard>
      <div className="space-y-3" data-ocid="quiz-options">
        {question.options.map((opt, i) => {
          const isCorrect = i === question.correctIndex;
          const isSelected = selectedOption === i;
          const revealed = selectedOption !== null;
          return (
            <button
              type="button"
              key={`opt-${question.id}-${i}`}
              onClick={() => handleSelect(i)}
              disabled={revealed}
              data-ocid={`quiz-option-${i}`}
              className={cn(
                "w-full text-left p-4 rounded-xl border transition-all duration-200 font-medium text-sm",
                !revealed &&
                  "hover:border-accent/50 hover:bg-accent/5 border-border bg-card/50 text-foreground",
                revealed &&
                  isCorrect &&
                  "border-emerald-500/60 bg-emerald-500/10 text-emerald-400",
                revealed &&
                  isSelected &&
                  !isCorrect &&
                  "border-red-500/60 bg-red-500/10 text-red-400",
                revealed &&
                  !isSelected &&
                  !isCorrect &&
                  "border-border opacity-50",
              )}
            >
              <span className="flex items-center gap-3">
                <span
                  className={cn(
                    "w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold shrink-0",
                    !revealed && "border-border text-muted-foreground",
                    revealed &&
                      isCorrect &&
                      "border-emerald-500 text-emerald-400",
                    revealed &&
                      isSelected &&
                      !isCorrect &&
                      "border-red-500 text-red-400",
                    revealed &&
                      !isSelected &&
                      !isCorrect &&
                      "border-border text-muted-foreground",
                  )}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </span>
            </button>
          );
        })}
      </div>
      {selectedOption !== null && (
        <GlassCard className="p-4 slide-up border-accent/20">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> AI Explanation
          </p>
          <p className="text-sm text-muted-foreground">
            {question.explanation}
          </p>
        </GlassCard>
      )}
      <div className="flex items-center justify-between gap-3 pt-2">
        <GoldButton
          variant="outline"
          size="sm"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          data-ocid="quiz-prev"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </GoldButton>
        {selectedOption !== null && (
          <GoldButton size="sm" onClick={handleNext} data-ocid="quiz-next">
            {currentIndex === questions.length - 1 ? "View Results" : "Next"}{" "}
            <ChevronRight className="w-4 h-4" />
          </GoldButton>
        )}
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────
const TABS: { id: Tab; label: string; icon: typeof BookOpen }[] = [
  { id: "vocabulary", label: "Vocabulary", icon: BookOpen },
  { id: "phrasal", label: "Phrasal Verbs", icon: MessageSquare },
  { id: "idioms", label: "Idioms & Phrases", icon: Star },
  { id: "quiz", label: "Daily Quiz", icon: Zap },
];

export function EnglishMasteryPage() {
  const [activeTab, setActiveTab] = useState<Tab>("vocabulary");
  const [bookmarks, setBookmarks] = useState<Set<string>>(loadBookmarks);

  useEffect(() => {
    saveBookmarks(bookmarks);
  }, [bookmarks]);

  function toggleBookmark(key: string) {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-6 h-6 text-accent" />
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                  English Section
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                English Mastery
              </h1>
              <p className="text-muted-foreground mt-1 text-sm">
                Master vocabulary, phrasal verbs, idioms — and test yourself
                daily
              </p>
            </div>
            <GlassCard
              gold
              className="px-4 py-2 flex items-center gap-2 self-start sm:self-auto"
            >
              <BookmarkCheck className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-foreground">
                {bookmarks.size}
              </span>
              <span className="text-xs text-muted-foreground">bookmarked</span>
            </GlassCard>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              {
                label: "Vocabulary Words",
                value: vocabulary.length,
                icon: BookOpen,
              },
              {
                label: "Phrasal Verbs",
                value: phrasalVerbs.length,
                icon: MessageSquare,
              },
              { label: "Idioms & Phrases", value: idioms.length, icon: Star },
            ].map((stat) => (
              <GlassCard
                key={stat.label}
                className="p-3 flex items-center gap-2"
              >
                <stat.icon className="w-4 h-4 text-accent shrink-0" />
                <div className="min-w-0">
                  <p className="font-bold text-foreground text-lg leading-none">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {stat.label}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Tab Nav */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div
            className="flex gap-1 overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
            role="tablist"
            data-ocid="english-tabs"
          >
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                type="button"
                key={id}
                role="tab"
                aria-selected={activeTab === id}
                onClick={() => setActiveTab(id)}
                data-ocid={`tab-${id}`}
                className={cn(
                  "flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap",
                  activeTab === id
                    ? "border-accent text-accent"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border",
                )}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "vocabulary" && (
              <VocabularyTab
                bookmarks={bookmarks}
                onToggleBookmark={toggleBookmark}
              />
            )}
            {activeTab === "phrasal" && (
              <PhrasalVerbsTab
                bookmarks={bookmarks}
                onToggleBookmark={toggleBookmark}
              />
            )}
            {activeTab === "idioms" && (
              <IdiomsTab
                bookmarks={bookmarks}
                onToggleBookmark={toggleBookmark}
              />
            )}
            {activeTab === "quiz" && <DailyQuizTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
