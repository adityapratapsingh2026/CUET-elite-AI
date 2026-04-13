import { useCallback, useState } from "react";
import type { GameState, LeaderboardEntry } from "../types";

export const BADGES = [
  {
    id: "first-quiz",
    name: "First Step",
    icon: "🎯",
    xpRequired: 0,
    description: "Complete your first quiz",
    color: "gold",
  },
  {
    id: "streak-3",
    name: "On Fire",
    icon: "🔥",
    xpRequired: 0,
    description: "Maintain a 3-day streak",
    color: "orange",
  },
  {
    id: "streak-7",
    name: "Week Warrior",
    icon: "⚔️",
    xpRequired: 0,
    description: "7-day study streak",
    color: "amber",
  },
  {
    id: "perfect-score",
    name: "Perfectionist",
    icon: "💎",
    xpRequired: 0,
    description: "Score 100% in any quiz",
    color: "cyan",
  },
  {
    id: "xp-500",
    name: "Scholar Rising",
    icon: "📚",
    xpRequired: 500,
    description: "Earn 500 XP",
    color: "blue",
  },
  {
    id: "xp-2000",
    name: "Elite Mind",
    icon: "🧠",
    xpRequired: 2000,
    description: "Earn 2000 XP",
    color: "purple",
  },
];

export const XP_THRESHOLDS: Record<string, number> = {
  Beginner: 0,
  Amateur: 200,
  Scholar: 500,
  Expert: 1200,
  Topper: 2500,
};

export function xpToLevel(xp: number): string {
  if (xp >= 2500) return "Topper";
  if (xp >= 1200) return "Expert";
  if (xp >= 500) return "Scholar";
  if (xp >= 200) return "Amateur";
  return "Beginner";
}

function nextLevelThreshold(level: string): number {
  const next: Record<string, string> = {
    Beginner: "Amateur",
    Amateur: "Scholar",
    Scholar: "Expert",
    Expert: "Topper",
    Topper: "Topper",
  };
  return XP_THRESHOLDS[next[level]] ?? 2500;
}

// Rich mock data pre-loaded
export const MOCK_SCORE_HISTORY = [
  { day: "Mon", score: 62, date: "Apr 7" },
  { day: "Tue", score: 74, date: "Apr 8" },
  { day: "Wed", score: 58, date: "Apr 9" },
  { day: "Thu", score: 81, date: "Apr 10" },
  { day: "Fri", score: 88, date: "Apr 11" },
  { day: "Sat", score: 76, date: "Apr 12" },
  { day: "Sun", score: 92, date: "Apr 13" },
];

export const MOCK_SUBJECT_ACCURACY = [
  { subject: "General Test", accuracy: 88, color: "#d4a843", attempted: 130 },
  { subject: "English", accuracy: 82, color: "#60a5fa", attempted: 120 },
  {
    subject: "Business Studies",
    accuracy: 76,
    color: "#4ade80",
    attempted: 98,
  },
  { subject: "Maths", accuracy: 71, color: "#f87171", attempted: 110 },
  { subject: "Accounts", accuracy: 63, color: "#a78bfa", attempted: 85 },
];

export const MOCK_WEAK_TOPICS = [
  {
    id: "wt1",
    topic: "Balance Sheet Analysis",
    subject: "Accounts",
    accuracy: 42,
  },
  {
    id: "wt2",
    topic: "Differentiation & Integration",
    subject: "Maths",
    accuracy: 48,
  },
  {
    id: "wt3",
    topic: "Journal Entries (Advanced)",
    subject: "Accounts",
    accuracy: 51,
  },
  {
    id: "wt4",
    topic: "Probability & Statistics",
    subject: "Maths",
    accuracy: 54,
  },
  {
    id: "wt5",
    topic: "Business Ethics & CSR",
    subject: "Business Studies",
    accuracy: 57,
  },
];

export const MOCK_STRONG_TOPICS = [
  {
    id: "st1",
    topic: "Reading Comprehension",
    subject: "English",
    accuracy: 96,
  },
  {
    id: "st2",
    topic: "Logical Reasoning",
    subject: "General Test",
    accuracy: 94,
  },
  {
    id: "st3",
    topic: "Vocabulary & Grammar",
    subject: "English",
    accuracy: 92,
  },
  {
    id: "st4",
    topic: "Data Interpretation",
    subject: "General Test",
    accuracy: 90,
  },
  {
    id: "st5",
    topic: "Marketing Management",
    subject: "Business Studies",
    accuracy: 88,
  },
];

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "Aryan Sharma",
    avatarUrl: "",
    currentXP: 3840,
    level: "Topper",
    streak: 21,
  },
  {
    rank: 2,
    name: "Priya Verma",
    avatarUrl: "",
    currentXP: 3510,
    level: "Topper",
    streak: 18,
  },
  {
    rank: 3,
    name: "Rohit Gupta",
    avatarUrl: "",
    currentXP: 2920,
    level: "Topper",
    streak: 14,
  },
  {
    rank: 4,
    name: "Ananya Singh",
    avatarUrl: "",
    currentXP: 2640,
    level: "Expert",
    streak: 12,
  },
  {
    rank: 5,
    name: "Vikram Patel",
    avatarUrl: "",
    currentXP: 2390,
    level: "Expert",
    streak: 10,
  },
  {
    rank: 6,
    name: "Kavya Nair",
    avatarUrl: "",
    currentXP: 1980,
    level: "Expert",
    streak: 8,
  },
  {
    rank: 7,
    name: "You (Rahul)",
    avatarUrl: "",
    currentXP: 1740,
    level: "Expert",
    streak: 7,
  },
  {
    rank: 8,
    name: "Sanya Mehta",
    avatarUrl: "",
    currentXP: 1520,
    level: "Scholar",
    streak: 6,
  },
  {
    rank: 9,
    name: "Aditya Kumar",
    avatarUrl: "",
    currentXP: 1340,
    level: "Scholar",
    streak: 5,
  },
  {
    rank: 10,
    name: "Deepika Rao",
    avatarUrl: "",
    currentXP: 1180,
    level: "Scholar",
    streak: 4,
  },
];

export const MOCK_RECENT_TESTS = [
  {
    id: "rt1",
    subject: "General Test",
    testName: "CUET Full Mock #3",
    score: 72,
    totalQuestions: 100,
    accuracy: 72,
    date: "Apr 12, 2026",
    timeTaken: 90,
  },
  {
    id: "rt2",
    subject: "English",
    testName: "English Advanced Quiz",
    score: 9,
    totalQuestions: 10,
    accuracy: 90,
    date: "Apr 11, 2026",
    timeTaken: 12,
  },
  {
    id: "rt3",
    subject: "Maths",
    testName: "Algebra Speed Test",
    score: 6,
    totalQuestions: 10,
    accuracy: 60,
    date: "Apr 10, 2026",
    timeTaken: 15,
  },
  {
    id: "rt4",
    subject: "Business Studies",
    testName: "Management Concepts",
    score: 8,
    totalQuestions: 10,
    accuracy: 80,
    date: "Apr 9, 2026",
    timeTaken: 11,
  },
  {
    id: "rt5",
    subject: "Accounts",
    testName: "Financial Statements Quiz",
    score: 5,
    totalQuestions: 10,
    accuracy: 50,
    date: "Apr 8, 2026",
    timeTaken: 18,
  },
];

export const MOCK_QUICK_STATS = {
  todayScore: 92,
  weeklyAverage: 76,
  totalQuizzes: 47,
  currentStreak: 7,
};

export const MOCK_AI_RECOMMENDATION = {
  focusTopic: "Balance Sheet Analysis",
  subject: "Accounts",
  reason:
    "Your accuracy in Balance Sheet topics dropped 18% this week. A targeted 30-min session can improve your score significantly.",
  suggestedQuizzes: [
    "Journal Entries Practice",
    "Trial Balance Quiz",
    "P&L Statement Analysis",
  ],
  studyPlanTip:
    "Spend 20 mins on Accounts tonight and 15 mins on Maths differentiation tomorrow morning for maximum gain before your next mock.",
};

export const DEFAULT_GAME_STATE: GameState = {
  xp: 1740,
  level: "Expert",
  streak: 7,
  badges: ["first-quiz", "streak-3", "streak-7", "xp-500"],
  completedChallenges: [],
};

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(() => {
    const stored = localStorage.getItem("gameState");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as GameState;
        // Seed with defaults if xp is 0 (first time or reset)
        if (parsed.xp === 0) return DEFAULT_GAME_STATE;
        return parsed;
      } catch {
        // ignore
      }
    }
    return DEFAULT_GAME_STATE;
  });

  const saveState = useCallback((state: GameState) => {
    setGameState(state);
    localStorage.setItem("gameState", JSON.stringify(state));
  }, []);

  const addXP = useCallback((amount: number) => {
    setGameState((prev) => {
      const newXP = prev.xp + amount;
      const newLevel = xpToLevel(newXP);
      const newBadges = [...prev.badges];

      if (newXP >= 500 && !newBadges.includes("xp-500"))
        newBadges.push("xp-500");
      if (newXP >= 2000 && !newBadges.includes("xp-2000"))
        newBadges.push("xp-2000");

      const updated = {
        ...prev,
        xp: newXP,
        level: newLevel,
        badges: newBadges,
      };
      localStorage.setItem("gameState", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const unlockBadge = useCallback(
    (badgeId: string) => {
      if (gameState.badges.includes(badgeId)) return;
      const updated = { ...gameState, badges: [...gameState.badges, badgeId] };
      saveState(updated);
    },
    [gameState, saveState],
  );

  const completeChallenge = useCallback(
    (challengeId: string) => {
      if (gameState.completedChallenges.includes(challengeId)) return;
      const newChallenges = [...gameState.completedChallenges, challengeId];
      const newStreak = gameState.streak + 1;
      const newBadges = [...gameState.badges];
      if (newStreak >= 3 && !newBadges.includes("streak-3"))
        newBadges.push("streak-3");
      if (newStreak >= 7 && !newBadges.includes("streak-7"))
        newBadges.push("streak-7");
      const updated = {
        ...gameState,
        streak: newStreak,
        badges: newBadges,
        completedChallenges: newChallenges,
      };
      saveState(updated);
    },
    [gameState, saveState],
  );

  const currentLevelThreshold = XP_THRESHOLDS[gameState.level] ?? 0;
  const nextThreshold = nextLevelThreshold(gameState.level);
  const progressPercent =
    gameState.level === "Topper"
      ? 100
      : Math.min(
          100,
          Math.round(
            ((gameState.xp - currentLevelThreshold) /
              (nextThreshold - currentLevelThreshold)) *
              100,
          ),
        );

  return {
    gameState,
    addXP,
    unlockBadge,
    completeChallenge,
    progressPercent,
    nextThreshold,
    BADGES,
  };
}
