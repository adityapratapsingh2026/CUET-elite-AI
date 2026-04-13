import { GlassCard } from "@/components/ui/GlassCard";
import { GoldButton } from "@/components/ui/GoldButton";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Filter,
  Lightbulb,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { TestResult } from "../MockTestPage";

interface ReviewScreenProps {
  result: TestResult;
  onBack: () => void;
}

const SUBJECT_LABELS: Record<string, string> = {
  English: "English",
  BusinessStudies: "Business Studies",
  Accounts: "Accountancy",
  Maths: "Mathematics",
  GeneralTest: "General Test",
};

type FilterType = "all" | "correct" | "wrong" | "skipped";

export function ReviewScreen({ result, onBack }: ReviewScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<FilterType>("all");
  const [showExplanation, setShowExplanation] = useState(true);

  const filteredIndices = result.questions
    .map((_, i) => i)
    .filter((i) => {
      const ans = result.answers[i];
      if (filter === "correct")
        return ans.selectedIndex === result.questions[i].correctIndex;
      if (filter === "wrong")
        return (
          ans.selectedIndex !== null &&
          ans.selectedIndex !== result.questions[i].correctIndex
        );
      if (filter === "skipped") return ans.selectedIndex === null;
      return true;
    });

  const actualIndex = filteredIndices[currentIndex] ?? 0;
  const q = result.questions[actualIndex];
  const ans = result.answers[actualIndex];
  const isCorrect = ans.selectedIndex === q.correctIndex;
  const isSkipped = ans.selectedIndex === null;

  const goTo = (i: number) => {
    if (i >= 0 && i < filteredIndices.length) {
      setCurrentIndex(i);
      setShowExplanation(true);
    }
  };

  return (
    <div className="min-h-screen bg-background py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Results
          </button>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="font-semibold text-sm">Answer Review</span>
          </div>
        </div>

        {/* Filter Bar */}
        <GlassCard className="p-3 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
            <span className="text-xs text-muted-foreground mr-1">Filter:</span>
            {(["all", "correct", "wrong", "skipped"] as FilterType[]).map(
              (f) => {
                const counts = {
                  all: result.questions.length,
                  correct: result.answers.filter(
                    (a, i) =>
                      a.selectedIndex === result.questions[i].correctIndex,
                  ).length,
                  wrong: result.answers.filter(
                    (a, i) =>
                      a.selectedIndex !== null &&
                      a.selectedIndex !== result.questions[i].correctIndex,
                  ).length,
                  skipped: result.answers.filter(
                    (a) => a.selectedIndex === null,
                  ).length,
                };
                const isActive = filter === f;
                return (
                  <button
                    type="button"
                    key={f}
                    onClick={() => {
                      setFilter(f);
                      setCurrentIndex(0);
                    }}
                    data-ocid={`review-filter-${f}`}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border capitalize ${
                      isActive
                        ? "bg-accent text-accent-foreground border-accent"
                        : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
                    }`}
                  >
                    {f} ({counts[f]})
                  </button>
                );
              },
            )}
          </div>
        </GlassCard>

        {filteredIndices.length === 0 ? (
          <GlassCard className="p-10 text-center">
            <p className="text-muted-foreground">
              No questions match this filter.
            </p>
          </GlassCard>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Question Review */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.2 }}
                >
                  <GlassCard className="p-6 mb-4">
                    {/* Question header */}
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="text-xs text-muted-foreground">
                        Q.{actualIndex + 1}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded border border-border text-muted-foreground bg-muted/30">
                        {SUBJECT_LABELS[q.subject] ?? q.subject}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded border border-border text-muted-foreground bg-muted/30">
                        {q.topic}
                      </span>
                      {isSkipped ? (
                        <Badge variant="secondary" className="text-xs">
                          Skipped
                        </Badge>
                      ) : isCorrect ? (
                        <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded border border-green-500/40 bg-green-500/10 text-green-400">
                          <CheckCircle2 className="w-3 h-3" />
                          Correct
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded border border-red-500/40 bg-red-500/10 text-red-400">
                          <XCircle className="w-3 h-3" />
                          Wrong
                        </span>
                      )}
                    </div>

                    {/* Question text */}
                    <p className="font-semibold text-base leading-relaxed mb-6">
                      {q.question}
                    </p>

                    {/* Options */}
                    <div className="space-y-3">
                      {q.options.map((opt, i) => {
                        const isUserAnswer = ans.selectedIndex === i;
                        const isCorrectOption = q.correctIndex === i;
                        return (
                          <div
                            key={opt}
                            className={`flex items-start gap-3 p-4 rounded-xl border text-sm ${
                              isCorrectOption
                                ? "border-green-500/50 bg-green-500/10"
                                : isUserAnswer && !isCorrect
                                  ? "border-red-500/40 bg-red-500/10"
                                  : "border-border bg-muted/20"
                            }`}
                          >
                            <span
                              className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-bold shrink-0 ${
                                isCorrectOption
                                  ? "bg-green-500/20 border-green-500/50 text-green-400"
                                  : isUserAnswer && !isCorrect
                                    ? "bg-red-500/20 border-red-500/50 text-red-400"
                                    : "border-border text-muted-foreground"
                              }`}
                            >
                              {String.fromCharCode(65 + i)}
                            </span>
                            <span
                              className={`flex-1 leading-relaxed ${
                                isCorrectOption
                                  ? "text-green-400 font-medium"
                                  : isUserAnswer && !isCorrect
                                    ? "text-red-400"
                                    : "text-muted-foreground"
                              }`}
                            >
                              {opt}
                            </span>
                            {isCorrectOption && (
                              <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                            )}
                            {isUserAnswer && !isCorrect && (
                              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </GlassCard>

                  {/* AI Explanation */}
                  <GlassCard gold className="p-5">
                    <button
                      type="button"
                      onClick={() => setShowExplanation((v) => !v)}
                      className="flex items-center gap-2 text-sm font-semibold text-accent w-full text-left"
                      data-ocid="toggle-explanation-btn"
                    >
                      <Lightbulb className="w-4 h-4" />
                      AI Step-by-Step Explanation
                      <span className="ml-auto text-xs text-muted-foreground">
                        {showExplanation ? "Hide" : "Show"}
                      </span>
                    </button>
                    <AnimatePresence>
                      {showExplanation && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-foreground/80 leading-relaxed mt-3 pt-3 border-t border-accent/20">
                            {q.explanation}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </GlassCard>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => goTo(currentIndex - 1)}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-sm rounded-xl border border-border text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
                  data-ocid="review-prev-btn"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                <div className="flex-1 flex items-center justify-center text-sm text-muted-foreground">
                  {currentIndex + 1} / {filteredIndices.length}
                </div>
                <GoldButton
                  onClick={() => goTo(currentIndex + 1)}
                  disabled={currentIndex === filteredIndices.length - 1}
                  data-ocid="review-next-btn"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </GoldButton>
              </div>
            </div>

            {/* Question List Panel */}
            <div>
              <GlassCard className="p-4 sticky top-6">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Questions ({filteredIndices.length})
                </p>
                <div className="grid grid-cols-5 gap-1.5 max-h-80 overflow-y-auto pr-1">
                  {filteredIndices.map((qIdx, listIdx) => {
                    const a = result.answers[qIdx];
                    const isCorrectA =
                      a.selectedIndex === result.questions[qIdx].correctIndex;
                    const isSkippedA = a.selectedIndex === null;
                    const isCurrent = listIdx === currentIndex;
                    return (
                      <button
                        type="button"
                        key={`${qIdx}-review`}
                        onClick={() => goTo(listIdx)}
                        data-ocid={`review-nav-${listIdx}`}
                        aria-label={`Review question ${qIdx + 1}`}
                        className={`aspect-square rounded-lg text-xs font-medium border transition-all ${
                          isCurrent
                            ? "bg-accent text-accent-foreground border-accent"
                            : isSkippedA
                              ? "border-border text-muted-foreground hover:border-accent/40"
                              : isCorrectA
                                ? "bg-green-500/15 text-green-400 border-green-500/40"
                                : "bg-red-500/15 text-red-400 border-red-500/40"
                        }`}
                      >
                        {qIdx + 1}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  {[
                    { dot: "bg-green-500/70", label: "Correct" },
                    { dot: "bg-red-500/70", label: "Wrong" },
                    { dot: "bg-muted", label: "Skipped" },
                    { dot: "bg-accent", label: "Current" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-2">
                      <div
                        className={`w-2.5 h-2.5 rounded-sm ${s.dot} border border-white/10`}
                      />
                      {s.label}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
