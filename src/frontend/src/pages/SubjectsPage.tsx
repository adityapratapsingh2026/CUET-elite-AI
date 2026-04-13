import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { questions } from "../data/questions";
import { useGameState } from "../hooks/useGameState";
import type { QuizQuestion } from "../types";

type SubjectKey = QuizQuestion["subject"];
type SortOption = "name" | "progress" | "lastAttempted";

interface SubjectMeta {
  key: SubjectKey;
  label: string;
  icon: string;
  description: string;
  gradientFrom: string;
  shadowHover: string;
  borderHover: string;
  weakTopics: string[];
}

const SUBJECT_META: SubjectMeta[] = [
  {
    key: "English",
    label: "English",
    icon: "📖",
    description:
      "Grammar, vocabulary, idioms, reading comprehension & rhetoric mastery",
    gradientFrom: "from-blue-950/60 to-blue-900/20",
    shadowHover: "hover:shadow-blue-500/20",
    borderHover: "hover:border-blue-400/50",
    weakTopics: ["Figures of Speech", "Rhetoric"],
  },
  {
    key: "BusinessStudies",
    label: "Business Studies",
    icon: "💼",
    description:
      "Management, marketing, financial markets & Companies Act essentials",
    gradientFrom: "from-emerald-950/60 to-emerald-900/20",
    shadowHover: "hover:shadow-emerald-500/20",
    borderHover: "hover:border-emerald-400/50",
    weakTopics: ["Business Ethics", "Financial Markets"],
  },
  {
    key: "Accounts",
    label: "Accountancy",
    icon: "📊",
    description:
      "Accounting concepts, partnership, company accounts & cash flow statements",
    gradientFrom: "from-purple-950/60 to-purple-900/20",
    shadowHover: "hover:shadow-purple-500/20",
    borderHover: "hover:border-purple-400/50",
    weakTopics: ["Depreciation", "Inventory Valuation"],
  },
  {
    key: "Maths",
    label: "Mathematics",
    icon: "∑",
    description:
      "Calculus, algebra, trigonometry, matrices & probability at CUET level",
    gradientFrom: "from-rose-950/60 to-rose-900/20",
    shadowHover: "hover:shadow-rose-500/20",
    borderHover: "hover:border-rose-400/50",
    weakTopics: ["Permutations", "Limits"],
  },
  {
    key: "GeneralTest",
    label: "General Test (GAT)",
    icon: "🧠",
    description:
      "Reasoning, quantitative aptitude, GK, syllogisms & data interpretation",
    gradientFrom: "from-amber-950/60 to-amber-900/20",
    shadowHover: "hover:shadow-amber-500/20",
    borderHover: "hover:border-amber-400/50",
    weakTopics: ["Syllogism", "Blood Relations"],
  },
];

const SAMPLE_PROGRESS: Record<
  SubjectKey,
  {
    progress: number;
    answered: number;
    accuracy: number;
    lastAttempted: string;
    lastAttemptedOrder: number;
  }
> = {
  English: {
    progress: 72,
    answered: 48,
    accuracy: 81,
    lastAttempted: "2 hours ago",
    lastAttemptedOrder: 1,
  },
  BusinessStudies: {
    progress: 58,
    answered: 35,
    accuracy: 74,
    lastAttempted: "Yesterday",
    lastAttemptedOrder: 3,
  },
  Accounts: {
    progress: 45,
    answered: 27,
    accuracy: 67,
    lastAttempted: "3 days ago",
    lastAttemptedOrder: 4,
  },
  Maths: {
    progress: 83,
    answered: 52,
    accuracy: 89,
    lastAttempted: "Today",
    lastAttemptedOrder: 0,
  },
  GeneralTest: {
    progress: 61,
    answered: 40,
    accuracy: 76,
    lastAttempted: "5 hours ago",
    lastAttemptedOrder: 2,
  },
};

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "progress", label: "Progress" },
  { value: "name", label: "Name" },
  { value: "lastAttempted", label: "Last Attempted" },
];

function getDiffCount(key: SubjectKey, diff: QuizQuestion["difficulty"]) {
  return questions.filter((q) => q.subject === key && q.difficulty === diff)
    .length;
}

function getTotalCount(key: SubjectKey) {
  return questions.filter((q) => q.subject === key).length;
}

function getRecommendedDifficulty(progress: number): {
  label: string;
  cls: string;
} {
  if (progress >= 75)
    return {
      label: "Push Hard",
      cls: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    };
  if (progress >= 40)
    return {
      label: "Medium",
      cls: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    };
  return {
    label: "Start Easy",
    cls: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  };
}

export function SubjectsPage() {
  const navigate = useNavigate();
  const { gameState } = useGameState();
  const [sort, setSort] = useState<SortOption>("progress");

  const totalAnswered = Object.values(SAMPLE_PROGRESS).reduce(
    (s, d) => s + d.answered,
    0,
  );
  const overallAccuracy = Math.round(
    Object.values(SAMPLE_PROGRESS).reduce((s, d) => s + d.accuracy, 0) / 5,
  );
  const streak = gameState.streak > 0 ? gameState.streak : 7;

  const sortedSubjects = useMemo(() => {
    const list = [...SUBJECT_META];
    if (sort === "name") {
      list.sort((a, b) => a.label.localeCompare(b.label));
    } else if (sort === "progress") {
      list.sort(
        (a, b) =>
          SAMPLE_PROGRESS[b.key].progress - SAMPLE_PROGRESS[a.key].progress,
      );
    } else {
      list.sort(
        (a, b) =>
          SAMPLE_PROGRESS[a.key].lastAttemptedOrder -
          SAMPLE_PROGRESS[b.key].lastAttemptedOrder,
      );
    }
    return list;
  }, [sort]);

  const handleQuickStart = (key: SubjectKey) => {
    navigate({ to: "/quiz", search: { subject: key } });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header Zone */}
      <div className="relative overflow-hidden bg-card border-b border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% -10%, oklch(0.75 0.18 70 / 0.12), transparent)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">📚</span>
              <Badge
                variant="outline"
                className="text-primary border-primary/40 text-[10px] font-mono uppercase tracking-widest"
              >
                CUET 2025
              </Badge>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              Choose Your <span className="text-primary">Subject</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              AI-powered practice questions, weak-topic analysis, and instant
              feedback — all in one place.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            {
              label: "Questions Answered",
              value: `${totalAnswered}`,
              icon: "✅",
            },
            {
              label: "Overall Accuracy",
              value: `${overallAccuracy}%`,
              icon: "🎯",
            },
            { label: "Subjects Active", value: "5 / 5", icon: "📖" },
            { label: "Study Streak", value: `${streak} days`, icon: "🔥" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-gold rounded-xl p-4 flex items-center gap-3"
              data-ocid="subjects-stat"
            >
              <span className="text-2xl">{stat.icon}</span>
              <div className="min-w-0">
                <p className="text-xl font-bold font-display text-primary truncate">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Sort / Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex items-center gap-2 flex-wrap"
          data-ocid="subjects-filter-bar"
        >
          <span className="text-sm text-muted-foreground font-medium">
            Sort by:
          </span>
          {SORT_OPTIONS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => setSort(value)}
              data-ocid={`sort-${value}`}
              className={[
                "px-4 py-1.5 rounded-full text-sm font-medium transition-smooth border",
                sort === value
                  ? "bg-primary text-primary-foreground border-primary gold-glow"
                  : "bg-muted/50 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground",
              ].join(" ")}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sortedSubjects.map((subject, index) => {
            const prog = SAMPLE_PROGRESS[subject.key];
            const totalQ = getTotalCount(subject.key);
            const easyCount = getDiffCount(subject.key, "Easy");
            const mediumCount = getDiffCount(subject.key, "Medium");
            const hardCount = getDiffCount(subject.key, "Hard");
            const recommended = getRecommendedDifficulty(prog.progress);

            return (
              <motion.div
                key={subject.key}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.09 }}
                className={[
                  "group relative rounded-2xl border border-border bg-gradient-to-br",
                  subject.gradientFrom,
                  "backdrop-blur-xl p-6 flex flex-col gap-4",
                  "hover-lift hover:shadow-2xl",
                  subject.shadowHover,
                  subject.borderHover,
                  "transition-smooth",
                ].join(" ")}
                data-ocid={`subject-card-${subject.key.toLowerCase()}`}
              >
                {/* Gold accent glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, oklch(0.75 0.18 70 / 0.07), transparent 70%)",
                  }}
                />

                {/* Card Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-card/60 backdrop-blur border border-border flex items-center justify-center text-2xl shadow-sm group-hover:border-primary/40 transition-smooth shrink-0">
                      {subject.icon}
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-display font-bold text-foreground text-lg leading-tight truncate">
                        {subject.label}
                      </h2>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {totalQ} questions
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold shrink-0 mt-1 px-2.5 py-1 rounded-full border ${recommended.cls}`}
                    data-ocid="recommended-badge"
                  >
                    {recommended.label}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {subject.description}
                </p>

                {/* Progress */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium">
                      Completion
                    </span>
                    <span className="text-xs font-bold text-primary font-mono">
                      {prog.progress}%
                    </span>
                  </div>
                  <Progress
                    value={prog.progress}
                    className="h-2 bg-muted/60"
                    data-ocid="subject-progress-bar"
                  />
                </div>

                {/* Difficulty Distribution */}
                <div className="flex gap-2" data-ocid="difficulty-distribution">
                  {[
                    {
                      label: "Easy",
                      count: easyCount,
                      cls: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                    },
                    {
                      label: "Med",
                      count: mediumCount,
                      cls: "text-amber-400 bg-amber-500/10 border-amber-500/20",
                    },
                    {
                      label: "Hard",
                      count: hardCount,
                      cls: "text-rose-400 bg-rose-500/10 border-rose-500/20",
                    },
                  ].map((d) => (
                    <div
                      key={d.label}
                      className={`flex-1 rounded-lg border py-2 px-1 text-center ${d.cls}`}
                    >
                      <p className="text-base font-bold font-mono leading-none">
                        {d.count}
                      </p>
                      <p className="text-[10px] font-medium mt-0.5">
                        {d.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Meta Row */}
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/40 pt-3">
                  <span>🎯 {prog.accuracy}%</span>
                  <span>✅ {prog.answered} done</span>
                  <span>⏱ {prog.lastAttempted}</span>
                </div>

                {/* Weak Topics */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-muted-foreground font-medium">
                    Needs work:
                  </span>
                  {subject.weakTopics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs bg-destructive/10 text-destructive border border-destructive/20 rounded-full px-2 py-0.5"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Quick Start CTA */}
                <Button
                  variant="default"
                  size="sm"
                  className="w-full mt-auto gold-glow font-semibold"
                  onClick={() => handleQuickStart(subject.key)}
                  data-ocid={`quickstart-${subject.key.toLowerCase()}`}
                >
                  ⚡ Quick Start
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="rounded-2xl glass-gold p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          data-ocid="subjects-cta-strip"
        >
          <div>
            <p className="font-display font-bold text-lg text-foreground">
              🏆 Ready to challenge yourself?
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Take a full-length CUET mock test under real exam conditions.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate({ to: "/dashboard" })}
              data-ocid="goto-dashboard"
            >
              View Dashboard
            </Button>
            <Button
              variant="default"
              size="lg"
              className="gold-glow"
              onClick={() => navigate({ to: "/mock-test" })}
              data-ocid="goto-mocktest"
            >
              Start Mock Test →
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
