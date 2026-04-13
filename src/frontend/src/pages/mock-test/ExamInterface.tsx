import { GlassCard } from "@/components/ui/GlassCard";
import { GoldButton } from "@/components/ui/GoldButton";
import { toast } from "@/components/ui/Toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { MockTestMeta } from "@/data/mockTests";
import type { QuizQuestion } from "@/types";
import { playCorrect } from "@/utils/sounds";
import {
  AlertTriangle,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  EyeOff,
  Send,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ExamAnswer } from "../MockTestPage";

interface ExamInterfaceProps {
  meta: MockTestMeta;
  questions: QuizQuestion[];
  onSubmit: (
    answers: ExamAnswer[],
    timeTaken: number,
    tabViolations: number,
  ) => void;
  onAbort: () => void;
}

const SUBJECT_LABELS: Record<string, string> = {
  English: "English",
  BusinessStudies: "Business Studies",
  Accounts: "Accountancy",
  Maths: "Mathematics",
  GeneralTest: "General Test",
};

const SUBJECT_COLORS: Record<string, string> = {
  English: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  BusinessStudies: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  Accounts: "text-green-400 bg-green-400/10 border-green-400/30",
  Maths: "text-red-400 bg-red-400/10 border-red-400/30",
  GeneralTest: "text-accent bg-accent/10 border-accent/30",
};

export function ExamInterface({
  meta,
  questions,
  onSubmit,
  onAbort,
}: ExamInterfaceProps) {
  const totalSeconds = meta.durationMinutes * 60;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<ExamAnswer[]>(() =>
    questions.map((_, i) => ({
      questionIndex: i,
      selectedIndex: null,
      flagged: false,
      timeSpent: 0,
    })),
  );
  const [tabViolations, setTabViolations] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [countdownWarning, setCountdownWarning] = useState(false);
  const [autoSubmitCountdown, setAutoSubmitCountdown] = useState(5);
  const [showNav, setShowNav] = useState(true);
  const questionStartTime = useRef(Date.now());
  const submitRef = useRef<() => void>(() => {});

  const handleSubmit = useCallback(() => {
    const timeTaken = totalSeconds - timeLeft;
    onSubmit(answers, timeTaken, tabViolations);
  }, [answers, timeLeft, totalSeconds, tabViolations, onSubmit]);

  submitRef.current = handleSubmit;

  // Timer countdown — single interval, functional updater avoids re-triggering on timeLeft changes
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setCountdownWarning(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto-submit countdown when time ends
  useEffect(() => {
    if (!countdownWarning) return;
    let count = 5;
    setAutoSubmitCountdown(5);
    const interval = setInterval(() => {
      count -= 1;
      setAutoSubmitCountdown(count);
      if (count <= 0) {
        clearInterval(interval);
        submitRef.current();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownWarning]);

  // Tab visibility monitoring
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabViolations((v) => {
          const newCount = v + 1;
          if (newCount >= 3) {
            toast("🚨 3 tab violations — auto-submitting test!", "error");
            setTimeout(() => submitRef.current(), 1500);
          } else {
            toast(`⚠️ Tab switch detected! Warning ${newCount}/3`, "error");
            setShowWarning(true);
            setTimeout(() => setShowWarning(false), 4000);
          }
          return newCount;
        });
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Prevent accidental navigation away
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue =
        "Your exam progress will be lost. Are you sure you want to leave?";
      return e.returnValue;
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  // Track time spent per question — run whenever currentIndex changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally tracks currentIndex changes
  useEffect(() => {
    questionStartTime.current = Date.now();
  }, [currentIndex]);

  const selectAnswer = useCallback((optionIndex: number) => {
    const timeSpent = Math.round(
      (Date.now() - questionStartTime.current) / 1000,
    );
    setCurrentIndex((idx) => {
      setAnswers((prev) => {
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          selectedIndex: optionIndex,
          timeSpent,
        };
        return updated;
      });
      return idx;
    });
    playCorrect();
  }, []);

  const toggleFlag = useCallback(() => {
    setCurrentIndex((idx) => {
      setAnswers((prev) => {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], flagged: !updated[idx].flagged };
        return updated;
      });
      return idx;
    });
  }, []);

  const goTo = useCallback(
    (i: number) => {
      if (i >= 0 && i < questions.length) {
        questionStartTime.current = Date.now();
        setCurrentIndex(i);
      }
    },
    [questions.length],
  );

  const answered = answers.filter((a) => a.selectedIndex !== null).length;
  const flaggedCount = answers.filter((a) => a.flagged).length;

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const secs = timeLeft % 60;
  const timeCritical = timeLeft < 600; // < 10 min
  const timeWarning = timeLeft < 1800; // < 30 min

  const q = questions[currentIndex];
  const currentAnswer = answers[currentIndex];

  const confirmAbort = () => {
    if (
      window.confirm(
        "Are you sure you want to exit? Your progress will be lost.",
      )
    ) {
      onAbort();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Auto-submit countdown overlay */}
      <AnimatePresence>
        {countdownWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center"
          >
            <GlassCard gold className="p-8 text-center max-w-sm w-full mx-4">
              <div className="w-16 h-16 rounded-full bg-destructive/20 border-2 border-destructive/50 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-destructive" />
              </div>
              <h2 className="font-display font-bold text-2xl mb-2">
                Time's Up!
              </h2>
              <p className="text-muted-foreground mb-4">Auto-submitting in</p>
              <p className="font-display font-bold text-6xl text-destructive">
                {autoSubmitCountdown}
              </p>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tab violation warning */}
      <AnimatePresence>
        {showWarning && (
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            className="fixed top-0 left-0 right-0 z-50 bg-destructive/90 backdrop-blur-xl px-4 py-3 text-center"
          >
            <div className="flex items-center justify-center gap-2 text-destructive-foreground">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">
                Tab switching detected! Violations: {tabViolations}/3 — 3
                violations will auto-submit.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Exam Bar */}
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-xl border-b border-border px-4 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Test name */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={confirmAbort}
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
              aria-label="Exit exam"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">
                CUET Elite AI — Exam Mode
              </p>
              <h2 className="font-semibold text-sm truncate">{meta.name}</h2>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-green-400 font-medium">{answered}</span>
              <span>/</span>
              <span>{questions.length}</span>
              <span>answered</span>
            </div>
            {flaggedCount > 0 && (
              <div className="hidden sm:flex items-center gap-1 text-xs text-accent">
                <Bookmark className="w-3 h-3" />
                {flaggedCount} flagged
              </div>
            )}
            {tabViolations > 0 && (
              <div className="flex items-center gap-1 text-xs text-destructive">
                <AlertTriangle className="w-3 h-3" />
                {tabViolations}/3
              </div>
            )}
            {/* Timer */}
            <div
              className={`flex items-center gap-1.5 font-mono text-sm px-3 py-1.5 rounded-lg border font-bold tabular-nums ${
                timeCritical
                  ? "border-destructive/50 bg-destructive/10 text-destructive animate-pulse"
                  : timeWarning
                    ? "border-amber-500/40 bg-amber-500/10 text-amber-400"
                    : "border-border text-foreground"
              }`}
              data-ocid="exam-timer"
            >
              <Clock className="w-3.5 h-3.5" />
              {hours > 0 && `${String(hours).padStart(2, "0")}:`}
              {String(minutes).padStart(2, "0")}:{String(secs).padStart(2, "0")}
            </div>
            <GoldButton
              size="sm"
              onClick={() => {
                if (
                  window.confirm(
                    `Submit test? You've answered ${answered}/${questions.length} questions.`,
                  )
                ) {
                  handleSubmit();
                }
              }}
              data-ocid="submit-test-btn"
            >
              <Send className="w-3.5 h-3.5" />
              Submit
            </GoldButton>
          </div>
        </div>

        {/* Progress bar */}
        <div className="max-w-7xl mx-auto mt-2">
          <div className="h-1 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-300 rounded-full"
              style={{ width: `${(answered / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main exam body */}
      <div className="flex-1 flex max-w-7xl mx-auto w-full px-4 py-6 gap-6">
        {/* Question Panel — left */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <GlassCard className="p-6 mb-4">
                {/* Question meta */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xs font-medium text-muted-foreground">
                    Q.{currentIndex + 1} of {questions.length}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded border font-medium ${
                      SUBJECT_COLORS[q.subject] ??
                      "text-accent bg-accent/10 border-accent/30"
                    }`}
                  >
                    {SUBJECT_LABELS[q.subject] ?? q.subject}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded border ${
                      q.difficulty === "Hard"
                        ? "text-red-400 border-red-400/30 bg-red-400/10"
                        : q.difficulty === "Medium"
                          ? "text-amber-400 border-amber-400/30 bg-amber-400/10"
                          : "text-green-400 border-green-400/30 bg-green-400/10"
                    }`}
                  >
                    {q.difficulty}
                  </span>
                  {currentAnswer.flagged && (
                    <span className="text-xs text-accent border border-accent/30 bg-accent/10 px-2 py-0.5 rounded flex items-center gap-1">
                      <Bookmark className="w-3 h-3" />
                      Flagged
                    </span>
                  )}
                </div>

                {/* Question text */}
                <p className="font-semibold text-base md:text-lg leading-relaxed mb-6">
                  {q.question}
                </p>

                {/* Options */}
                <div className="space-y-3">
                  {q.options.map((opt, i) => {
                    const isSelected = currentAnswer.selectedIndex === i;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => selectAnswer(i)}
                        data-ocid={`exam-option-${i}`}
                        className={`w-full text-left p-4 rounded-xl border text-sm transition-all duration-200 flex items-center gap-3 ${
                          isSelected
                            ? "border-accent bg-accent/10 text-accent shadow-[0_0_12px_0_rgba(213,175,97,0.2)]"
                            : "border-border hover:border-accent/40 hover:bg-accent/5 text-foreground"
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-200 ${
                            isSelected
                              ? "bg-accent text-accent-foreground border-accent"
                              : "border-border text-muted-foreground"
                          }`}
                        >
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="flex-1 leading-relaxed">{opt}</span>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0"
                          >
                            <span className="text-accent-foreground text-xs">
                              ✓
                            </span>
                          </motion.div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </GlassCard>

              {/* Action Row */}
              <div className="flex gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={toggleFlag}
                  data-ocid="flag-question-btn"
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm rounded-xl border transition-all duration-200 ${
                    currentAnswer.flagged
                      ? "border-accent text-accent bg-accent/10"
                      : "border-border text-muted-foreground hover:border-accent/40 hover:text-accent"
                  }`}
                >
                  {currentAnswer.flagged ? (
                    <BookmarkCheck className="w-4 h-4" />
                  ) : (
                    <Bookmark className="w-4 h-4" />
                  )}
                  {currentAnswer.flagged ? "Unflag" : "Flag for Review"}
                </button>
                {currentAnswer.selectedIndex !== null && (
                  <button
                    type="button"
                    onClick={() =>
                      setAnswers((prev) => {
                        const updated = [...prev];
                        updated[currentIndex] = {
                          ...updated[currentIndex],
                          selectedIndex: null,
                        };
                        return updated;
                      })
                    }
                    className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-border/80 transition-all duration-200"
                  >
                    Clear Response
                  </button>
                )}
                <div className="flex-1" />
                <button
                  type="button"
                  onClick={() => goTo(currentIndex - 1)}
                  disabled={currentIndex === 0}
                  data-ocid="prev-question-btn"
                  className="flex items-center gap-1.5 px-4 py-2.5 text-sm rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-border/80 disabled:opacity-30 transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                <GoldButton
                  onClick={() => goTo(currentIndex + 1)}
                  disabled={currentIndex === questions.length - 1}
                  data-ocid="next-question-btn"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </GoldButton>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigator Panel — right */}
        <div
          className={`shrink-0 transition-all duration-300 ${showNav ? "w-64" : "w-10"}`}
        >
          <GlassCard className="sticky top-28 p-4">
            {/* Toggle */}
            <button
              type="button"
              onClick={() => setShowNav((v) => !v)}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors w-full mb-3"
              aria-label={showNav ? "Collapse navigator" : "Expand navigator"}
              data-ocid="toggle-nav-btn"
            >
              {showNav ? (
                <>
                  <EyeOff className="w-3.5 h-3.5 shrink-0" />
                  <span>Hide Panel</span>
                </>
              ) : (
                <Eye className="w-3.5 h-3.5 shrink-0" />
              )}
            </button>

            {showNav && (
              <>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Question Navigator
                </p>

                {/* Stats summary */}
                <div className="grid grid-cols-3 gap-1.5 mb-3">
                  {[
                    {
                      label: "Answered",
                      count: answered,
                      color: "text-green-400",
                    },
                    {
                      label: "Flagged",
                      count: flaggedCount,
                      color: "text-accent",
                    },
                    {
                      label: "Skipped",
                      count: questions.length - answered,
                      color: "text-muted-foreground",
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="text-center px-1 py-2 rounded-lg bg-muted/50"
                    >
                      <p className={`text-lg font-bold ${s.color}`}>
                        {s.count}
                      </p>
                      <p className="text-[10px] text-muted-foreground leading-none mt-0.5">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Number grid */}
                <ScrollArea className="h-64">
                  <div className="grid grid-cols-5 gap-1.5 pr-1">
                    {questions.map((ques, i) => {
                      const ans = answers[i];
                      const isCurrent = i === currentIndex;
                      const isAnswered = ans.selectedIndex !== null;
                      const isFlagged = ans.flagged;
                      return (
                        <button
                          type="button"
                          key={ques.id}
                          onClick={() => goTo(i)}
                          data-ocid={`nav-q-${i}`}
                          aria-label={`Go to question ${i + 1}`}
                          className={`aspect-square rounded-lg text-xs font-medium transition-all duration-150 border relative ${
                            isCurrent
                              ? "bg-accent text-accent-foreground border-accent shadow-[0_0_8px_0_rgba(213,175,97,0.4)]"
                              : isFlagged
                                ? "bg-accent/15 text-accent border-accent/50"
                                : isAnswered
                                  ? "bg-green-500/15 text-green-400 border-green-500/40"
                                  : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
                          }`}
                        >
                          {i + 1}
                          {isFlagged && (
                            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-accent" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </ScrollArea>

                {/* Legend */}
                <div className="mt-3 space-y-1">
                  {[
                    { dot: "bg-accent", label: "Current" },
                    { dot: "bg-green-500/70", label: "Answered" },
                    { dot: "bg-accent/50", label: "Flagged" },
                    { dot: "bg-muted", label: "Not visited" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-sm ${s.dot} border border-white/10`}
                      />
                      {s.label}
                    </div>
                  ))}
                </div>
              </>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
