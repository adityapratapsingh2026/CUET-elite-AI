import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Flame,
  Lock,
  Moon,
  Settings,
  Shield,
  Star,
  Sun,
  Target,
  Trophy,
  Volume2,
  VolumeX,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { GoldButton } from "../components/ui/GoldButton";
import { useAuth } from "../hooks/useAuth";
import { useDarkMode } from "../hooks/useDarkMode";
import { useGameState } from "../hooks/useGameState";

// ─── Rich sample data ────────────────────────────────────────────────────────
const SAMPLE = {
  name: "Arjun Sharma",
  joinDate: "January 12, 2025",
  totalQuestions: 543,
  overallAccuracy: 78,
  bestScore: 98,
  totalStudyTimeHrs: 64,
  totalTests: 31,
};

const QUIZ_HISTORY = [
  {
    id: "qh1",
    date: "Apr 12",
    subject: "English",
    difficulty: "Hard",
    score: 9,
    total: 10,
    accuracy: 90,
    timeSec: 480,
  },
  {
    id: "qh2",
    date: "Apr 11",
    subject: "Maths",
    difficulty: "Medium",
    score: 7,
    total: 10,
    accuracy: 70,
    timeSec: 562,
  },
  {
    id: "qh3",
    date: "Apr 10",
    subject: "GeneralTest",
    difficulty: "Easy",
    score: 10,
    total: 10,
    accuracy: 100,
    timeSec: 310,
  },
  {
    id: "qh4",
    date: "Apr 9",
    subject: "BusinessStudies",
    difficulty: "Medium",
    score: 8,
    total: 10,
    accuracy: 80,
    timeSec: 490,
  },
  {
    id: "qh5",
    date: "Apr 8",
    subject: "Accounts",
    difficulty: "Hard",
    score: 6,
    total: 10,
    accuracy: 60,
    timeSec: 600,
  },
  {
    id: "qh6",
    date: "Apr 7",
    subject: "English",
    difficulty: "Medium",
    score: 9,
    total: 10,
    accuracy: 90,
    timeSec: 412,
  },
  {
    id: "qh7",
    date: "Apr 6",
    subject: "Maths",
    difficulty: "Hard",
    score: 7,
    total: 10,
    accuracy: 70,
    timeSec: 580,
  },
  {
    id: "qh8",
    date: "Apr 5",
    subject: "GeneralTest",
    difficulty: "Medium",
    score: 8,
    total: 10,
    accuracy: 80,
    timeSec: 390,
  },
  {
    id: "qh9",
    date: "Apr 4",
    subject: "BusinessStudies",
    difficulty: "Easy",
    score: 10,
    total: 10,
    accuracy: 100,
    timeSec: 280,
  },
  {
    id: "qh10",
    date: "Apr 3",
    subject: "Accounts",
    difficulty: "Medium",
    score: 7,
    total: 10,
    accuracy: 70,
    timeSec: 520,
  },
];

const MOCK_HISTORY = [
  {
    id: "mh1",
    date: "Apr 10",
    name: "CUET Full Mock — Series 3",
    score: 142,
    total: 200,
    accuracy: 71,
  },
  {
    id: "mh2",
    date: "Apr 3",
    name: "CUET Full Mock — Series 2",
    score: 158,
    total: 200,
    accuracy: 79,
  },
  {
    id: "mh3",
    date: "Mar 27",
    name: "CUET Full Mock — Series 1",
    score: 134,
    total: 200,
    accuracy: 67,
  },
  {
    id: "mh4",
    date: "Mar 20",
    name: "English Section Mock",
    score: 38,
    total: 50,
    accuracy: 76,
  },
  {
    id: "mh5",
    date: "Mar 14",
    name: "GAT Speed Test",
    score: 44,
    total: 50,
    accuracy: 88,
  },
];

const BADGES_META = [
  {
    id: "first-quiz",
    name: "First Quiz",
    icon: "🎯",
    unlockCondition: "Complete 1 quiz",
    unlockedDate: "Jan 14",
  },
  {
    id: "quiz-master",
    name: "Quiz Master",
    icon: "🏆",
    unlockCondition: "Complete 10 quizzes",
    unlockedDate: "Feb 1",
  },
  {
    id: "accuracy-champion",
    name: "Accuracy Champion",
    icon: "💎",
    unlockCondition: "Achieve 90%+ accuracy",
    unlockedDate: "Feb 18",
  },
  {
    id: "streak-keeper",
    name: "Streak Keeper",
    icon: "🔥",
    unlockCondition: "Maintain 7-day streak",
    unlockedDate: "Mar 5",
  },
  {
    id: "mock-pro",
    name: "Mock Pro",
    icon: "📋",
    unlockCondition: "Complete 1 mock test",
    unlockedDate: "Mar 20",
  },
  {
    id: "century-club",
    name: "Century Club",
    icon: "💯",
    unlockCondition: "Answer 100 questions",
    unlockedDate: "Mar 28",
  },
  {
    id: "scholar",
    name: "Scholar",
    icon: "📚",
    unlockCondition: "Reach Scholar level (500 XP)",
    unlockedDate: null,
  },
  {
    id: "xp-2000",
    name: "Elite Mind",
    icon: "🧠",
    unlockCondition: "Earn 2000 XP",
    unlockedDate: null,
  },
];

const LEVEL_RANKS = [
  "Beginner",
  "Amateur",
  "Scholar",
  "Expert",
  "Topper",
] as const;
type LevelRank = (typeof LEVEL_RANKS)[number];
const LEVEL_ICONS: Record<LevelRank, string> = {
  Beginner: "🌱",
  Amateur: "⚡",
  Scholar: "📖",
  Expert: "🌟",
  Topper: "👑",
};
const LEVEL_COLORS: Record<LevelRank, string> = {
  Beginner: "text-green-400 border-green-400/30 bg-green-400/10",
  Amateur: "text-blue-400 border-blue-400/30 bg-blue-400/10",
  Scholar: "text-purple-400 border-purple-400/30 bg-purple-400/10",
  Expert: "text-accent border-accent/30 bg-accent/10",
  Topper: "text-accent border-accent/40 bg-accent/15",
};
const LEVEL_XP: Record<LevelRank, number> = {
  Beginner: 0,
  Amateur: 200,
  Scholar: 500,
  Expert: 1200,
  Topper: 2500,
};

const DIFF_PILL: Record<string, string> = {
  Easy: "text-green-400 bg-green-400/10",
  Medium: "text-accent bg-accent/10",
  Hard: "text-red-400 bg-red-400/10",
};
const SUBJECT_SHORT: Record<string, string> = {
  English: "English",
  BusinessStudies: "Business",
  Accounts: "Accounts",
  Maths: "Maths",
  GeneralTest: "GAT",
};

// 30-day calendar (deterministic based on streak)
function build30DayCalendar(
  streak: number,
): { completed: boolean; label: string }[] {
  const today = new Date();
  return Array.from({ length: 30 }, (_, i) => {
    const daysAgo = 29 - i;
    const d = new Date(today);
    d.setDate(today.getDate() - daysAgo);
    const completed = daysAgo < streak || daysAgo === 0;
    return {
      completed,
      label: d.toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
    };
  });
}

type SortKey =
  | "date"
  | "subject"
  | "difficulty"
  | "score"
  | "accuracy"
  | "timeSec";

export function ProfilePage() {
  const { gameState, progressPercent, nextThreshold } = useGameState();
  const { isDark, toggle: toggleDark } = useDarkMode();
  const { identity } = useAuth();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortAsc, setSortAsc] = useState(false);

  // Resolve data — prefer live gameState, fall back to rich sample
  const xp = gameState.xp > 0 ? gameState.xp : 1240;
  const level = (
    LEVEL_RANKS.includes(gameState.level as LevelRank)
      ? gameState.level
      : "Scholar"
  ) as LevelRank;
  const streak = gameState.streak > 0 ? gameState.streak : 12;
  const earnedBadges =
    gameState.badges.length > 0
      ? gameState.badges
      : [
          "first-quiz",
          "quiz-master",
          "accuracy-champion",
          "streak-keeper",
          "mock-pro",
          "century-club",
        ];

  const identityStr = identity?.getPrincipal().toString() ?? "2vxsx-fae";
  const truncId =
    identityStr.length > 14
      ? `${identityStr.slice(0, 8)}…${identityStr.slice(-6)}`
      : identityStr;

  const currentLevelXP = LEVEL_XP[level] ?? 0;
  const nextLevelXP =
    nextThreshold > 0
      ? nextThreshold
      : (LEVEL_XP[LEVEL_RANKS[Math.min(LEVEL_RANKS.indexOf(level) + 1, 4)]] ??
        2500);
  const effectiveProgress =
    progressPercent > 0
      ? progressPercent
      : level === "Topper"
        ? 100
        : Math.min(
            100,
            Math.round(
              ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100,
            ),
          );

  const calendarDays = build30DayCalendar(streak);

  const sortedHistory = [...QUIZ_HISTORY].sort((a, b) => {
    let cmp = 0;
    if (sortKey === "date") cmp = a.id.localeCompare(b.id);
    else if (sortKey === "subject") cmp = a.subject.localeCompare(b.subject);
    else if (sortKey === "difficulty")
      cmp = a.difficulty.localeCompare(b.difficulty);
    else if (sortKey === "score") cmp = a.score - b.score;
    else if (sortKey === "accuracy") cmp = a.accuracy - b.accuracy;
    else if (sortKey === "timeSec") cmp = a.timeSec - b.timeSec;
    return sortAsc ? cmp : -cmp;
  });

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortAsc((v) => !v);
    else {
      setSortKey(key);
      setSortAsc(false);
    }
  }

  const stats = [
    {
      id: "questions",
      label: "Total Questions",
      value: SAMPLE.totalQuestions.toLocaleString(),
      icon: BookOpen,
      color: "text-blue-400",
    },
    {
      id: "accuracy",
      label: "Overall Accuracy",
      value: `${SAMPLE.overallAccuracy}%`,
      icon: Target,
      color: "text-green-400",
    },
    {
      id: "best-score",
      label: "Best Score",
      value: `${SAMPLE.bestScore}%`,
      icon: Trophy,
      color: "text-accent",
    },
    {
      id: "study-time",
      label: "Study Time (hrs)",
      value: String(SAMPLE.totalStudyTimeHrs),
      icon: Clock,
      color: "text-purple-400",
    },
    {
      id: "streak",
      label: "Current Streak",
      value: `${streak} 🔥`,
      icon: Flame,
      color: "text-orange-400",
    },
    {
      id: "tests",
      label: "Tests Taken",
      value: String(SAMPLE.totalTests),
      icon: Shield,
      color: "text-cyan-400",
    },
  ];

  const TABLE_COLS: { key: SortKey; label: string; align?: string }[] = [
    { key: "date", label: "Date" },
    { key: "subject", label: "Subject" },
    { key: "difficulty", label: "Difficulty" },
    { key: "score", label: "Score", align: "text-right" },
    { key: "accuracy", label: "Accuracy", align: "text-right" },
    { key: "timeSec", label: "Time", align: "text-right" },
  ];

  return (
    <div className="min-h-screen bg-background py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* ─── Page title ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display font-bold text-3xl">
            My <span className="text-accent">Profile</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Your journey, achievements, and settings
          </p>
        </motion.div>

        {/* ─── Profile Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.04 }}
        >
          <GlassCard gold className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/5 border-2 border-accent/40 flex items-center justify-center shadow-[0_0_30px_0_rgba(213,175,97,0.3)]">
                  <span className="font-display font-bold text-3xl text-accent select-none">
                    {SAMPLE.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-card border-2 border-card flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 block" />
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 text-center sm:text-left min-w-0">
                <h2 className="font-display font-bold text-2xl sm:text-3xl">
                  {SAMPLE.name}
                </h2>
                <p className="text-xs text-muted-foreground mt-1 font-mono">
                  ID: {truncId}
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${LEVEL_COLORS[level]}`}
                  >
                    {LEVEL_ICONS[level]} {level}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Joined{" "}
                    {SAMPLE.joinDate}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-accent" />
                    {xp.toLocaleString()} XP total
                  </span>
                </div>
              </div>

              <GoldButton
                variant="outline"
                size="sm"
                className="shrink-0"
                data-ocid="edit-profile-btn"
              >
                Edit Profile
              </GoldButton>
            </div>
          </GlassCard>
        </motion.div>

        {/* ─── Level & XP ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <Zap className="w-4 h-4 text-accent" />
              <h2 className="font-semibold font-display">Level Progress</h2>
            </div>

            {/* Level rings */}
            <div className="flex gap-2 overflow-x-auto pb-1 mb-5">
              {LEVEL_RANKS.map((lvl) => {
                const isActive = level === lvl;
                const isPast =
                  LEVEL_RANKS.indexOf(lvl) < LEVEL_RANKS.indexOf(level);
                return (
                  <div
                    key={lvl}
                    className={`flex-1 min-w-[72px] rounded-xl border p-3 text-center transition-all duration-300 ${
                      isActive
                        ? `${LEVEL_COLORS[lvl]} scale-105 shadow-lg`
                        : isPast
                          ? "border-border/50 bg-muted/20 opacity-70"
                          : "border-border/30 bg-muted/10 opacity-40"
                    }`}
                  >
                    <div className="text-2xl mb-1">{LEVEL_ICONS[lvl]}</div>
                    <p className="text-xs font-semibold whitespace-nowrap">
                      {lvl}
                    </p>
                    {isPast && (
                      <p className="text-xs text-muted-foreground mt-0.5">✓</p>
                    )}
                    {isActive && (
                      <p className="text-xs text-current mt-0.5 font-bold">
                        YOU
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* XP bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Progress to{" "}
                  <strong className="text-foreground">
                    {level === "Topper" ? "MAX" : "next level"}
                  </strong>
                </span>
                <span className="text-accent font-bold">
                  {effectiveProgress}%
                </span>
              </div>
              <div className="h-3 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent/70 via-accent to-accent/90"
                  initial={{ width: 0 }}
                  animate={{ width: `${effectiveProgress}%` }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{currentLevelXP.toLocaleString()} XP</span>
                <span className="font-mono">
                  {xp.toLocaleString()} / {nextLevelXP.toLocaleString()} XP
                </span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* ─── Stats Grid ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
        >
          <h2 className="font-display font-semibold text-base mb-4 text-muted-foreground uppercase tracking-wide text-xs">
            Performance Stats
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 + i * 0.04 }}
              >
                <GlassCard
                  className="p-5 hover-lift cursor-default"
                  data-ocid={`stat-${s.id}`}
                >
                  <s.icon className={`w-5 h-5 ${s.color} mb-3`} />
                  <p className="font-display font-bold text-2xl text-foreground">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {s.label}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── Badges ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
        >
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <Award className="w-4 h-4 text-accent" />
              <h2 className="font-semibold font-display">
                Badges & Achievements
              </h2>
              <span className="ml-auto text-xs px-2.5 py-0.5 rounded-full border border-accent/30 bg-accent/5 text-accent">
                {earnedBadges.length}/{BADGES_META.length} unlocked
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {BADGES_META.map((badge) => {
                const unlocked = earnedBadges.includes(badge.id);
                return (
                  <div
                    key={badge.id}
                    data-ocid={`badge-${badge.id}`}
                    className={`relative rounded-xl border p-4 text-center transition-all duration-300 ${
                      unlocked
                        ? "border-accent/30 bg-accent/5 shadow-[0_0_14px_0_rgba(213,175,97,0.18)] hover:shadow-[0_0_22px_0_rgba(213,175,97,0.3)] hover:-translate-y-1 cursor-default"
                        : "border-border bg-muted/15 opacity-50 grayscale"
                    }`}
                  >
                    <div className="text-3xl mb-2 leading-none">
                      {badge.icon}
                    </div>
                    <p className="text-xs font-semibold leading-tight">
                      {badge.name}
                    </p>
                    {unlocked ? (
                      badge.unlockedDate ? (
                        <p className="text-xs text-accent mt-1.5">
                          ✓ {badge.unlockedDate}
                        </p>
                      ) : null
                    ) : (
                      <div className="flex items-center justify-center gap-1 mt-1.5">
                        <Lock className="w-3 h-3 text-muted-foreground shrink-0" />
                        <p className="text-xs text-muted-foreground leading-tight truncate">
                          {badge.unlockCondition}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>

        {/* ─── 30-Day Streak Calendar ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
        >
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400" />
                <h2 className="font-semibold font-display">
                  30-Day Study Calendar
                </h2>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-400/30 bg-orange-400/10">
                <span className="text-sm">🔥</span>
                <span className="text-sm font-bold text-orange-400">
                  {streak}-day streak
                </span>
              </div>
            </div>

            <div className="grid grid-cols-10 gap-1.5">
              {calendarDays.map((day, i) => (
                <motion.div
                  key={day.label}
                  title={`${day.label} — ${day.completed ? "Studied ✓" : "Missed"}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.23 + i * 0.008 }}
                  className={`aspect-square rounded-md transition-all duration-200 ${
                    day.completed
                      ? "bg-accent/60 shadow-[0_0_5px_0_rgba(213,175,97,0.4)] border border-accent/50"
                      : "bg-muted/30 border border-border"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-5 mt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-accent/60 border border-accent/50" />
                <span>Studied</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-muted/30 border border-border" />
                <span>Missed</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* ─── Quiz History Table ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26 }}
        >
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <BookOpen className="w-4 h-4 text-accent" />
              <h2 className="font-semibold font-display">Quiz History</h2>
              <span className="ml-auto text-xs text-muted-foreground">
                Last {QUIZ_HISTORY.length} quizzes
              </span>
            </div>

            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full text-sm min-w-[540px]">
                <thead>
                  <tr className="border-b border-border">
                    {TABLE_COLS.map((col) => (
                      <th
                        key={col.key}
                        className={`py-2.5 px-3 ${col.align ?? "text-left"}`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleSort(col.key)}
                          data-ocid={`sort-${col.key}`}
                          className="text-xs font-semibold text-muted-foreground uppercase tracking-wider cursor-pointer select-none hover:text-accent transition-colors"
                        >
                          {col.label}
                          {sortKey === col.key ? (sortAsc ? " ↑" : " ↓") : ""}
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sortedHistory.map((q, i) => (
                    <motion.tr
                      key={q.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.025 }}
                      data-ocid={`quiz-row-${q.id}`}
                      className="border-b border-border/40 hover:bg-white/3 transition-colors"
                    >
                      <td className="py-3 px-3 text-muted-foreground">
                        {q.date}
                      </td>
                      <td className="py-3 px-3 font-medium">
                        {SUBJECT_SHORT[q.subject] ?? q.subject}
                      </td>
                      <td className="py-3 px-3">
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${DIFF_PILL[q.difficulty]}`}
                        >
                          {q.difficulty}
                        </span>
                      </td>
                      <td className="py-3 px-3 font-bold text-right tabular-nums">
                        {q.score}/{q.total}
                      </td>
                      <td className="py-3 px-3 text-right tabular-nums">
                        <span
                          className={
                            q.accuracy >= 80
                              ? "text-green-400 font-bold"
                              : q.accuracy >= 60
                                ? "text-accent"
                                : "text-red-400"
                          }
                        >
                          {q.accuracy}%
                        </span>
                      </td>
                      <td className="py-3 px-3 text-muted-foreground text-right tabular-nums">
                        {Math.floor(q.timeSec / 60)}m {q.timeSec % 60}s
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </motion.div>

        {/* ─── Mock Test History ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <Trophy className="w-4 h-4 text-accent" />
              <h2 className="font-semibold font-display">Mock Test History</h2>
            </div>
            <div className="space-y-3">
              {MOCK_HISTORY.map((mt, i) => (
                <motion.div
                  key={mt.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.32 + i * 0.05 }}
                  data-ocid={`mock-row-${mt.id}`}
                  className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-accent/20 bg-white/2 transition-all"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{mt.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {mt.date}
                    </p>
                  </div>
                  <div className="shrink-0 text-right ml-4">
                    <p className="text-sm font-bold text-accent tabular-nums">
                      {mt.score}/{mt.total}
                    </p>
                    <p
                      className={`text-xs font-medium tabular-nums ${mt.accuracy >= 80 ? "text-green-400" : mt.accuracy >= 65 ? "text-accent" : "text-red-400"}`}
                    >
                      {mt.accuracy}% accuracy
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* ─── Settings ───────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34 }}
        >
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <Settings className="w-4 h-4 text-accent" />
              <h2 className="font-semibold font-display">Settings</h2>
            </div>
            <div className="space-y-3">
              <SettingRow
                icon={
                  isDark ? (
                    <Moon className="w-5 h-5 text-accent" />
                  ) : (
                    <Sun className="w-5 h-5 text-accent" />
                  )
                }
                label="Theme"
                description={isDark ? "Dark mode active" : "Light mode active"}
                enabled={isDark}
                onToggle={toggleDark}
                ocid="theme-toggle"
              />
              <SettingRow
                icon={
                  soundEnabled ? (
                    <Volume2 className="w-5 h-5 text-accent" />
                  ) : (
                    <VolumeX className="w-5 h-5 text-muted-foreground" />
                  )
                }
                label="Sound Effects"
                description="Quiz correct/wrong answer sounds"
                enabled={soundEnabled}
                onToggle={() => setSoundEnabled((v) => !v)}
                ocid="sound-toggle"
              />
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}

// ─── SettingRow sub-component ─────────────────────────────────────────────────
interface SettingRowProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
  ocid: string;
}
function SettingRow({
  icon,
  label,
  description,
  enabled,
  onToggle,
  ocid,
}: SettingRowProps) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-muted/10">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="text-sm font-medium">{label}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={onToggle}
        data-ocid={ocid}
        aria-label={`Toggle ${label}`}
        className={`relative w-12 h-6 rounded-full border transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
          enabled ? "bg-accent/25 border-accent/50" : "bg-muted border-border"
        }`}
      >
        <span
          className={`absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300 shadow-sm ${
            enabled ? "left-6 bg-accent" : "left-0.5 bg-muted-foreground/50"
          }`}
        />
      </button>
    </div>
  );
}
