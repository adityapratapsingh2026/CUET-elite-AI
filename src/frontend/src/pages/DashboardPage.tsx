import { Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Brain,
  CalendarDays,
  ChevronRight,
  Flame,
  Lightbulb,
  Star,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { GlassCard } from "../components/ui/GlassCard";
import { useMyProfile } from "../hooks/useBackend";
import {
  MOCK_AI_RECOMMENDATION,
  MOCK_LEADERBOARD,
  MOCK_QUICK_STATS,
  MOCK_RECENT_TESTS,
  MOCK_SCORE_HISTORY,
  MOCK_STRONG_TOPICS,
  MOCK_SUBJECT_ACCURACY,
  MOCK_WEAK_TOPICS,
  useGameState,
} from "../hooks/useGameState";

// ─── SVG Line Chart ──────────────────────────────────────────────────────────
function ScoreLineChart() {
  const data = MOCK_SCORE_HISTORY;
  const W = 600;
  const H = 180;
  const PAD = { top: 20, right: 20, bottom: 40, left: 40 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;
  const minScore = 40;
  const maxScore = 100;

  const pts = data.map((d, i) => ({
    x: PAD.left + (i / (data.length - 1)) * chartW,
    y:
      PAD.top +
      chartH -
      ((d.score - minScore) / (maxScore - minScore)) * chartH,
    ...d,
  }));

  const pathD = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
  const areaD = `${pathD} L ${pts[pts.length - 1].x} ${PAD.top + chartH} L ${pts[0].x} ${PAD.top + chartH} Z`;

  const gridLines = [40, 60, 80, 100];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      style={{ height: 180 }}
      role="img"
      aria-label="Score history line chart showing last 7 days"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor="var(--gold, oklch(0.75 0.18 70))"
            stopOpacity="0.35"
          />
          <stop
            offset="100%"
            stopColor="var(--gold, oklch(0.75 0.18 70))"
            stopOpacity="0"
          />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Grid lines */}
      {gridLines.map((v) => {
        const gy =
          PAD.top + chartH - ((v - minScore) / (maxScore - minScore)) * chartH;
        return (
          <g key={v}>
            <line
              x1={PAD.left}
              y1={gy}
              x2={PAD.left + chartW}
              y2={gy}
              stroke="currentColor"
              strokeOpacity={0.08}
              strokeWidth={1}
              strokeDasharray="4 4"
              className="text-foreground"
            />
            <text
              x={PAD.left - 8}
              y={gy + 4}
              textAnchor="end"
              fontSize={10}
              fill="currentColor"
              className="text-muted-foreground"
              fillOpacity={0.5}
            >
              {v}
            </text>
          </g>
        );
      })}

      {/* Area fill */}
      <path d={areaD} fill="url(#goldGrad)" />

      {/* Line */}
      <path
        d={pathD}
        fill="none"
        stroke="var(--gold, oklch(0.75 0.18 70))"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />

      {/* Data points */}
      {pts.map((p) => (
        <g key={p.day}>
          <circle
            cx={p.x}
            cy={p.y}
            r={5}
            fill="transparent"
            stroke="var(--gold, oklch(0.75 0.18 70))"
            strokeWidth={2}
          />
          <circle
            cx={p.x}
            cy={p.y}
            r={2.5}
            fill="var(--gold, oklch(0.75 0.18 70))"
          />
          {/* X axis label */}
          <text
            x={p.x}
            y={PAD.top + chartH + 18}
            textAnchor="middle"
            fontSize={11}
            fill="currentColor"
            fillOpacity={0.5}
            className="text-muted-foreground"
          >
            {p.day}
          </text>
          {/* Score tooltip above point */}
          <text
            x={p.x}
            y={p.y - 10}
            textAnchor="middle"
            fontSize={9}
            fill="var(--gold, oklch(0.75 0.18 70))"
            fillOpacity={0.8}
          >
            {p.score}%
          </text>
        </g>
      ))}
    </svg>
  );
}

// ─── Subject Bar ──────────────────────────────────────────────────────────────
function SubjectBar({
  subject,
  accuracy,
  color,
  attempted,
  index,
}: {
  subject: string;
  accuracy: number;
  color: string;
  attempted: number;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 + index * 0.08 }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground">{subject}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{attempted} qs</span>
          <span className="text-sm font-bold" style={{ color }}>
            {accuracy}%
          </span>
        </div>
      </div>
      <div className="h-2.5 rounded-full bg-muted/50 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${accuracy}%` }}
          transition={{
            duration: 0.9,
            delay: 0.5 + index * 0.08,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
}

// ─── Level Badge ──────────────────────────────────────────────────────────────
const levelEmoji: Record<string, string> = {
  Beginner: "🌱",
  Amateur: "📘",
  Scholar: "🎓",
  Expert: "⚡",
  Topper: "👑",
};
const levelColorClass: Record<string, string> = {
  Beginner: "text-green-400 bg-green-400/10 border-green-400/30",
  Amateur: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  Scholar: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  Expert: "text-accent bg-accent/10 border-accent/30",
  Topper: "text-yellow-300 bg-yellow-300/10 border-yellow-300/30",
};

// ─── Leaderboard Row ──────────────────────────────────────────────────────────
function LeaderboardRow({
  entry,
  isCurrentUser,
}: { entry: (typeof MOCK_LEADERBOARD)[0]; isCurrentUser: boolean }) {
  const initials = entry.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
        isCurrentUser
          ? "bg-accent/10 border border-accent/30"
          : "hover:bg-white/3 border border-transparent"
      }`}
    >
      {/* Rank */}
      <div
        className={`w-7 text-center font-bold text-sm shrink-0 ${
          entry.rank === 1
            ? "text-yellow-400"
            : entry.rank === 2
              ? "text-slate-300"
              : entry.rank === 3
                ? "text-amber-600"
                : "text-muted-foreground"
        }`}
      >
        {entry.rank <= 3 ? ["🥇", "🥈", "🥉"][entry.rank - 1] : entry.rank}
      </div>
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
          isCurrentUser
            ? "bg-accent text-background"
            : "bg-muted text-foreground"
        }`}
      >
        {initials}
      </div>
      {/* Name + level */}
      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-medium truncate ${isCurrentUser ? "text-accent" : "text-foreground"}`}
        >
          {entry.name}
        </p>
        <span
          className={`text-xs px-1.5 py-0.5 rounded-full border ${levelColorClass[entry.level] ?? levelColorClass.Beginner}`}
        >
          {levelEmoji[entry.level]} {entry.level}
        </span>
      </div>
      {/* XP */}
      <div className="text-right shrink-0">
        <p
          className={`text-sm font-bold ${isCurrentUser ? "text-accent" : "text-foreground"}`}
        >
          {entry.currentXP.toLocaleString()}
        </p>
        <p className="text-xs text-muted-foreground">XP</p>
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export function DashboardPage() {
  const { data: profile } = useMyProfile();
  const { gameState, progressPercent, nextThreshold, BADGES } = useGameState();
  const displayName = profile?.name ?? "Rahul";

  const quickStats = [
    {
      label: "Today's Score",
      value: MOCK_QUICK_STATS.todayScore,
      suffix: "%",
      icon: Star,
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      label: "Weekly Average",
      value: MOCK_QUICK_STATS.weeklyAverage,
      suffix: "%",
      icon: TrendingUp,
      color: "text-green-400",
      bg: "bg-green-400/10",
    },
    {
      label: "Total Quizzes",
      value: MOCK_QUICK_STATS.totalQuizzes,
      suffix: "",
      icon: BookOpen,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      label: "Current Streak",
      value: MOCK_QUICK_STATS.currentStreak,
      suffix: " days",
      icon: Flame,
      color: "text-orange-400",
      bg: "bg-orange-400/10",
    },
  ];

  const currentUserRank =
    MOCK_LEADERBOARD.findIndex((e) => e.name.includes("You")) + 1;

  return (
    <div
      className="min-h-screen bg-background py-8 px-4"
      data-ocid="dashboard-page"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* ── Welcome Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <GlassCard gold className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center text-2xl font-bold text-accent font-display shrink-0">
                  {displayName[0]}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Welcome back 👋
                  </p>
                  <h1 className="font-display font-bold text-2xl text-foreground">
                    Hello, <span className="text-accent">{displayName}</span>
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span
                      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border font-medium ${levelColorClass[gameState.level] ?? levelColorClass.Beginner}`}
                    >
                      {levelEmoji[gameState.level]} {gameState.level}
                    </span>
                    <span className="text-xs text-orange-400 font-medium flex items-center gap-1">
                      <Flame className="w-3 h-3" /> {gameState.streak}-day
                      streak
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {gameState.xp.toLocaleString()} XP total
                    </span>
                  </div>
                </div>
              </div>
              {/* XP Progress */}
              <div className="w-full sm:w-72">
                <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                  <span className="font-medium">Level Progress</span>
                  <span className="text-accent font-medium">
                    {progressPercent}% to{" "}
                    {gameState.level === "Expert" ? "Topper" : "next level"}
                  </span>
                </div>
                <div className="h-3 rounded-full bg-muted/50 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent/70 via-accent to-yellow-300 rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  >
                    <div className="absolute inset-y-0 right-0 w-4 bg-white/30 rounded-full" />
                  </motion.div>
                </div>
                <p className="text-xs text-muted-foreground mt-1.5">
                  <span className="text-accent font-medium">
                    {(nextThreshold - gameState.xp).toLocaleString()} XP
                  </span>{" "}
                  needed to reach next level
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* ── Quick Stats Row ── */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          data-ocid="quick-stats-row"
        >
          {quickStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
            >
              <GlassCard className="p-5 hover-lift">
                <div
                  className={`w-9 h-9 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}
                >
                  <stat.icon className={`w-4.5 h-4.5 ${stat.color}`} />
                </div>
                <p className={`font-display font-bold text-3xl ${stat.color}`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* ── Score History Chart + Subject Bars ── */}
        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="p-6 h-full">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <h3 className="font-semibold text-foreground">
                    Score History
                  </h3>
                </div>
                <span className="text-xs text-muted-foreground bg-muted/40 px-2 py-1 rounded-lg">
                  Last 7 days
                </span>
              </div>
              <ScoreLineChart />
            </GlassCard>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
          >
            <GlassCard className="p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Award className="w-4 h-4 text-accent" />
                <h3 className="font-semibold text-foreground">
                  Subject Accuracy
                </h3>
              </div>
              <div className="space-y-4">
                {MOCK_SUBJECT_ACCURACY.map((s, i) => (
                  <SubjectBar
                    key={s.subject}
                    subject={s.subject}
                    accuracy={s.accuracy}
                    color={s.color}
                    attempted={s.attempted}
                    index={i}
                  />
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* ── Weak + Strong Topics ── */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="w-4 h-4 text-red-400" />
                <h3 className="font-semibold text-foreground">Weak Topics</h3>
                <span className="ml-auto text-xs text-muted-foreground">
                  needs attention
                </span>
              </div>
              <div className="space-y-3">
                {MOCK_WEAK_TOPICS.map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + i * 0.06 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-red-500/5 border border-red-500/10 hover:border-red-400/25 transition-colors group"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {t.topic}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {t.subject}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      <span className="text-xs font-bold text-red-400 bg-red-400/10 border border-red-400/20 px-2 py-0.5 rounded-full">
                        {t.accuracy}%
                      </span>
                      <Link
                        to="/quiz"
                        data-ocid={`weak-topic-practice-${t.id}`}
                        className="text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity font-medium hover:underline flex items-center gap-0.5"
                      >
                        Practice <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <h3 className="font-semibold text-foreground">Strong Topics</h3>
                <span className="ml-auto text-xs text-muted-foreground">
                  keep it up
                </span>
              </div>
              <div className="space-y-3">
                {MOCK_STRONG_TOPICS.map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.06 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-green-500/5 border border-green-500/10 hover:border-green-400/25 transition-colors"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {t.topic}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {t.subject}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full shrink-0 ml-3">
                      {t.accuracy}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* ── AI Recommendation + Daily Challenge ── */}
        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard gold className="p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-4 h-4 text-accent" />
                <h3 className="font-semibold text-foreground">
                  AI Smart Recommendation
                </h3>
                <span className="ml-auto text-xs bg-accent/15 text-accent border border-accent/30 px-2 py-0.5 rounded-full font-medium">
                  Personalized
                </span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/15">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-accent mb-1">
                        Focus: {MOCK_AI_RECOMMENDATION.focusTopic}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {MOCK_AI_RECOMMENDATION.reason}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-muted/20 border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium">
                    Study Plan Tip
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {MOCK_AI_RECOMMENDATION.studyPlanTip}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium">
                    Suggested Quizzes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {MOCK_AI_RECOMMENDATION.suggestedQuizzes.map((q) => (
                      <Link
                        key={q}
                        to="/quiz"
                        data-ocid="ai-suggested-quiz"
                        className="text-xs px-3 py-1.5 rounded-lg bg-muted/30 border border-border hover:border-accent/30 hover:text-accent transition-colors text-foreground font-medium"
                      >
                        {q}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <GlassCard className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-accent" />
                <h3 className="font-semibold text-foreground">
                  Daily Challenge
                </h3>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="text-center py-5 rounded-xl bg-gradient-to-b from-accent/10 to-transparent border border-accent/20 mb-4">
                  <p className="text-4xl mb-2">🏆</p>
                  <p className="font-display font-bold text-xl text-foreground">
                    Day 7 Streak
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    +50 XP reward
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Today's topic</span>
                    <span className="text-accent font-medium">
                      General Test
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Questions</span>
                    <span className="text-foreground font-medium">10 MCQs</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Time limit</span>
                    <span className="text-foreground font-medium">10 mins</span>
                  </div>
                </div>
                <Link
                  to="/daily-challenge"
                  data-ocid="daily-challenge-cta"
                  className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-background font-semibold font-display text-sm hover:bg-accent/90 transition-colors hover-lift"
                >
                  <CalendarDays className="w-4 h-4" />
                  Start Daily Challenge
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* ── Leaderboard + Recent Tests ── */}
        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlassCard className="p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-accent" />
                  <h3 className="font-semibold text-foreground">Leaderboard</h3>
                </div>
                <span className="text-xs text-muted-foreground">
                  Your rank:{" "}
                  <span className="text-accent font-bold">
                    #{currentUserRank}
                  </span>
                </span>
              </div>
              <div className="space-y-1" data-ocid="leaderboard-list">
                {MOCK_LEADERBOARD.map((entry) => (
                  <LeaderboardRow
                    key={entry.rank}
                    entry={entry}
                    isCurrentUser={entry.name.includes("You")}
                  />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65 }}
          >
            <GlassCard className="p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-accent" />
                  <h3 className="font-semibold text-foreground">
                    Recent Tests
                  </h3>
                </div>
                <Link
                  to="/mock-test"
                  data-ocid="recent-tests-view-all"
                  className="text-xs text-accent hover:underline flex items-center gap-0.5"
                >
                  View all <ChevronRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Table */}
              <div className="overflow-x-auto -mx-2">
                <table
                  className="w-full text-sm min-w-[420px]"
                  data-ocid="recent-tests-table"
                >
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left text-xs text-muted-foreground font-medium pb-3 px-2">
                        Test
                      </th>
                      <th className="text-left text-xs text-muted-foreground font-medium pb-3 px-2">
                        Subject
                      </th>
                      <th className="text-right text-xs text-muted-foreground font-medium pb-3 px-2">
                        Score
                      </th>
                      <th className="text-right text-xs text-muted-foreground font-medium pb-3 px-2">
                        Accuracy
                      </th>
                      <th className="text-right text-xs text-muted-foreground font-medium pb-3 px-2">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {MOCK_RECENT_TESTS.map((test, i) => (
                      <motion.tr
                        key={test.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 + i * 0.05 }}
                        className="hover:bg-white/3 transition-colors"
                        data-ocid={`recent-test-row-${test.id}`}
                      >
                        <td className="py-3 px-2">
                          <p className="font-medium text-foreground truncate max-w-[140px]">
                            {test.testName}
                          </p>
                        </td>
                        <td className="py-3 px-2">
                          <span className="text-xs text-muted-foreground bg-muted/40 px-2 py-0.5 rounded-md">
                            {test.subject}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-right font-bold text-accent">
                          {test.score}/{test.totalQuestions}
                        </td>
                        <td className="py-3 px-2 text-right">
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                              test.accuracy >= 80
                                ? "text-green-400 bg-green-400/10"
                                : test.accuracy >= 60
                                  ? "text-accent bg-accent/10"
                                  : "text-red-400 bg-red-400/10"
                            }`}
                          >
                            {test.accuracy}%
                          </span>
                        </td>
                        <td className="py-3 px-2 text-right text-xs text-muted-foreground">
                          {test.date}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Badges row */}
              <div className="mt-5 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 font-medium">
                  Your Badges
                </p>
                <div className="flex flex-wrap gap-2">
                  {BADGES.map((badge) => {
                    const unlocked = gameState.badges.includes(badge.id);
                    return (
                      <div
                        key={badge.id}
                        title={`${badge.name}: ${badge.description}`}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg border transition-all ${
                          unlocked
                            ? "bg-accent/10 border-accent/30 shadow-[0_0_8px_0_rgba(213,175,97,0.2)]"
                            : "bg-muted/20 border-border opacity-35 grayscale"
                        }`}
                      >
                        {badge.icon}
                      </div>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
