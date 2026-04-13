import { GlassCard } from "@/components/ui/GlassCard";
import { GoldButton } from "@/components/ui/GoldButton";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  BarChart2,
  ChevronLeft,
  Clock,
  Eye,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import type { TestResult } from "../MockTestPage";

interface ResultScreenProps {
  result: TestResult;
  averageScore: number;
  onReview: () => void;
  onBack: () => void;
}

const SUBJECT_LABELS: Record<string, string> = {
  English: "English",
  BusinessStudies: "Business Studies",
  Accounts: "Accountancy",
  Maths: "Mathematics",
  GeneralTest: "General Test",
};

function getGrade(score: number): { grade: string; color: string } {
  if (score >= 90) return { grade: "A+", color: "text-green-400" };
  if (score >= 80) return { grade: "A", color: "text-green-400" };
  if (score >= 70) return { grade: "B+", color: "text-accent" };
  if (score >= 60) return { grade: "B", color: "text-accent" };
  if (score >= 50) return { grade: "C", color: "text-amber-400" };
  return { grade: "D", color: "text-red-400" };
}

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}h ${m}m ${s}s`;
  return `${m}m ${s}s`;
}

export function ResultScreen({
  result,
  averageScore,
  onReview,
  onBack,
}: ResultScreenProps) {
  const { grade, color } = getGrade(result.totalScore);
  const vsAverage = result.totalScore - averageScore;
  const totalCorrect = result.sectionResults.reduce((s, r) => s + r.correct, 0);

  return (
    <div className="min-h-screen bg-background py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Tests
        </button>

        {/* Hero Result Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <GlassCard gold className="p-8 mb-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Trophy + Grade */}
              <div className="flex flex-col items-center text-center shrink-0">
                <div className="w-24 h-24 rounded-full bg-accent/10 border-2 border-accent/40 flex items-center justify-center mb-3 shadow-[0_0_30px_0_rgba(213,175,97,0.25)]">
                  <Trophy className="w-12 h-12 text-accent" />
                </div>
                <p className={`font-display font-bold text-5xl ${color}`}>
                  {grade}
                </p>
                <p className="text-xs text-muted-foreground mt-1">Grade</p>
              </div>

              {/* Core Stats */}
              <div className="flex-1 w-full">
                <h2 className="font-display font-bold text-2xl mb-1">
                  Test Complete!
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  {result.testName}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    {
                      icon: <Target className="w-4 h-4" />,
                      label: "Score",
                      value: `${result.totalScore}%`,
                      sub: `${totalCorrect}/${result.totalQuestions} correct`,
                    },
                    {
                      icon: <BarChart2 className="w-4 h-4" />,
                      label: "Accuracy",
                      value: `${result.accuracy}%`,
                      sub: "of attempted",
                    },
                    {
                      icon: <Clock className="w-4 h-4" />,
                      label: "Time Taken",
                      value: formatTime(result.timeTaken),
                      sub: "total duration",
                    },
                    {
                      icon: <TrendingUp className="w-4 h-4" />,
                      label: "vs Average",
                      value: `${vsAverage >= 0 ? "+" : ""}${vsAverage}%`,
                      sub: `Avg: ${averageScore}%`,
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-background/60 rounded-xl p-4 border border-border"
                    >
                      <div className="flex items-center gap-1.5 text-accent mb-2">
                        {stat.icon}
                        <span className="text-xs text-muted-foreground">
                          {stat.label}
                        </span>
                      </div>
                      <p className="font-display font-bold text-xl text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {stat.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* XP Earned */}
            <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">XP Earned</span>
                <span className="text-accent font-bold text-lg">
                  +{result.xpEarned}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                {result.tabViolations > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    {result.tabViolations} Tab Violation
                    {result.tabViolations > 1 ? "s" : ""}
                  </Badge>
                )}
                <span>
                  {new Date(result.completedAt).toLocaleString("en-IN", {
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Section Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-6 mb-6">
            <h3 className="font-semibold mb-5 flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-accent" />
              Section-wise Breakdown
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {[
                      "Subject",
                      "Total",
                      "Attempted",
                      "Correct",
                      "Score",
                      "Performance",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left py-2 px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {result.sectionResults.map((sec, i) => (
                    <motion.tr
                      key={sec.subject}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.07 }}
                      className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                    >
                      <td className="py-3 px-3 font-medium">
                        {SUBJECT_LABELS[sec.subject] ?? sec.subject}
                      </td>
                      <td className="py-3 px-3 text-muted-foreground tabular-nums">
                        {sec.total}
                      </td>
                      <td className="py-3 px-3 text-muted-foreground tabular-nums">
                        {sec.attempted}
                      </td>
                      <td className="py-3 px-3 text-green-400 font-medium tabular-nums">
                        {sec.correct}
                      </td>
                      <td className="py-3 px-3 font-bold tabular-nums">
                        <span
                          className={
                            sec.score >= 70
                              ? "text-green-400"
                              : sec.score >= 50
                                ? "text-accent"
                                : "text-red-400"
                          }
                        >
                          {sec.score}%
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden min-w-16">
                            <div
                              className={`h-full rounded-full transition-all duration-700 ${
                                sec.score >= 70
                                  ? "bg-green-400"
                                  : sec.score >= 50
                                    ? "bg-accent"
                                    : "bg-red-400"
                              }`}
                              style={{ width: `${sec.score}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground w-8 shrink-0">
                            {sec.score >= 70
                              ? "✓"
                              : sec.score >= 50
                                ? "~"
                                : "✗"}
                          </span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </motion.div>

        {/* Performance vs Average */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <GlassCard className="p-6 mb-8">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-accent" />
              Performance vs. Class Average
            </h3>
            <div className="space-y-4">
              {[
                {
                  label: "Your Score",
                  value: result.totalScore,
                  color: "bg-accent",
                },
                {
                  label: "Class Average",
                  value: averageScore,
                  color: "bg-muted-foreground/50",
                },
              ].map((bar) => (
                <div key={bar.label} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{bar.label}</span>
                    <span className="font-bold">{bar.value}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${bar.value}%` }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className={`h-full rounded-full ${bar.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <GoldButton
            size="lg"
            className="flex-1"
            onClick={onReview}
            data-ocid="review-answers-btn"
          >
            <Eye className="w-4 h-4" />
            Review Answers & Explanations
          </GoldButton>
          <button
            type="button"
            onClick={onBack}
            data-ocid="back-to-tests-btn"
            className="flex-1 py-3.5 text-base rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-border/80 transition-all duration-200 font-medium"
          >
            Take Another Test
          </button>
        </motion.div>
      </div>
    </div>
  );
}
