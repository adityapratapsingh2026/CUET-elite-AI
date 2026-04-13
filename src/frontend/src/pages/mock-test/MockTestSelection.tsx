import { GlassCard } from "@/components/ui/GlassCard";
import { GoldButton } from "@/components/ui/GoldButton";
import type { MockTestMeta } from "@/data/mockTestGenerator";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  Flame,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

interface MockTestSelectionProps {
  tests: MockTestMeta[];
  onStartTest: (meta: MockTestMeta) => void;
}

const SUBJECT_OPTIONS = [
  {
    id: "English" as const,
    label: "English",
    emoji: "🔤",
  },
  {
    id: "BusinessStudies" as const,
    label: "Business Studies",
    emoji: "📊",
  },
  {
    id: "Accounts" as const,
    label: "Accounts",
    emoji: "💹",
  },
  {
    id: "Maths" as const,
    label: "Mathematics",
    emoji: "📐",
  },
  {
    id: "GeneralTest" as const,
    label: "General Test",
    emoji: "🧠",
  },
] as const;

type SubjectId = (typeof SUBJECT_OPTIONS)[number]["id"];

const difficultyColors: Record<string, string> = {
  Easy: "text-green-400 bg-green-400/10 border-green-400/30",
  Medium: "text-accent bg-accent/10 border-accent/30",
  Hard: "text-red-400 bg-red-400/10 border-red-400/30",
};

const tagIcons: Record<string, React.ReactNode> = {
  "Full Length": <FileText className="w-3 h-3" />,
  "All Sections": <BookOpen className="w-3 h-3" />,
  Commerce: <Zap className="w-3 h-3" />,
  GAT: <Target className="w-3 h-3" />,
  Aptitude: <Target className="w-3 h-3" />,
  English: <BookOpen className="w-3 h-3" />,
  "Final Exam": <Flame className="w-3 h-3" />,
  PYQ: <CheckCircle2 className="w-3 h-3" />,
  Advanced: <Flame className="w-3 h-3" />,
};

const PAGE_SIZE = 12;

export function MockTestSelection({
  tests,
  onStartTest,
}: MockTestSelectionProps) {
  const [activeSubject, setActiveSubject] = useState<SubjectId>("English");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => tests.filter((t) => t.subject === activeSubject),
    [tests, activeSubject],
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSubjectChange = (id: SubjectId) => {
    setActiveSubject(id);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium mb-4">
            <Target className="w-3.5 h-3.5" />
            Real Exam Simulation — 50 Tests per Subject
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-3">
            Mock <span className="text-accent">Test Series</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Full-length subject-specific CUET simulations — 50 questions, 60
            minutes, strict subject isolation
          </p>
        </motion.div>

        {/* Exam Mode Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <GlassCard
            className="p-4 border-accent/20 bg-accent/5"
            data-ocid="exam-mode-info"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <div className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">
                  Exam Mode Active:
                </span>{" "}
                Tab switching is monitored. 3 violations will auto-submit your
                test. Each test contains 50 questions from{" "}
                <span className="text-foreground font-medium">
                  one subject only
                </span>{" "}
                — no cross-subject mixing.
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Subject Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {SUBJECT_OPTIONS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => handleSubjectChange(s.id)}
                data-ocid={`subject-tab-${s.id}`}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                  activeSubject === s.id
                    ? "border-accent bg-accent/10 text-accent shadow-[0_0_16px_0_rgba(213,175,97,0.2)]"
                    : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
                }`}
              >
                <span>{s.emoji}</span>
                {s.label}
                <span className="text-xs opacity-70 font-mono">50</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Test Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginated.map((test, i) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.05 }}
            >
              <GlassCard
                className="p-6 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
                data-ocid={`mock-card-${test.id}`}
              >
                {/* Test Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full border ${difficultyColors[test.difficulty]}`}
                  >
                    {test.difficulty}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-semibold text-base mb-2 leading-snug">
                  {test.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                  {test.description}
                </p>

                {/* Stats Row */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    {test.totalQuestions} Qs
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    {test.durationMinutes} min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-green-400" />
                    Avg {test.averageScore}%
                  </span>
                </div>

                {/* Attempts */}
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                  <Users className="w-3 h-3" />
                  {test.attemptCount.toLocaleString()} students attempted
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {test.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border"
                    >
                      {tagIcons[tag] ?? null}
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <GoldButton
                  className="w-full"
                  onClick={() => onStartTest(test)}
                  data-ocid={`start-test-${test.id}`}
                >
                  Start Test
                </GoldButton>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-2 mt-10"
          >
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              data-ocid="page-prev"
              className="px-4 py-2 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:border-accent/40 hover:text-foreground transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Prev
            </button>
            <span className="text-sm text-muted-foreground px-2">
              Page <span className="text-foreground font-semibold">{page}</span>{" "}
              / {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              data-ocid="page-next"
              className="px-4 py-2 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:border-accent/40 hover:text-foreground transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </motion.div>
        )}

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          Results are saved to your performance dashboard automatically
        </motion.p>
      </div>
    </div>
  );
}
