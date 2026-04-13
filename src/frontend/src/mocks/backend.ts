import type { backendInterface } from "../backend.d";
import { Difficulty, Level, Subject } from "../backend.d";

// Mock Principal-like object
const mockPrincipal = { toText: () => "aaaa-bbbbb-ccccc", _isPrincipal: true } as any;

export const mockBackend: backendInterface = {
  awardBadge: async (_userId, _badgeId) => ({
    unlockedAt: BigInt(Date.now()),
    alreadyHad: false,
    badgeId: _badgeId,
  }),

  awardXP: async (_args) => ({
    xpAwarded: BigInt(50),
    newTotalXP: BigInt(1250),
    leveledUp: false,
    newLevel: Level.Scholar,
  }),

  calculateLevel: async (_xp) => Level.Scholar,

  completeDailyChallenge: async () => ({
    isTodayCompleted: true,
    lastCompletedDate: new Date().toISOString().split("T")[0],
    bestStreak: BigInt(12),
    currentStreak: BigInt(7),
  }),

  getLeaderboard: async () => [
    {
      currentXP: BigInt(4500),
      userId: mockPrincipal,
      name: "Arjun Sharma",
      rank: BigInt(1),
      level: Level.Topper,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    },
    {
      currentXP: BigInt(3800),
      userId: mockPrincipal,
      name: "Priya Mehta",
      rank: BigInt(2),
      level: Level.Expert,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    {
      currentXP: BigInt(3200),
      userId: mockPrincipal,
      name: "Rahul Gupta",
      rank: BigInt(3),
      level: Level.Expert,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    },
    {
      currentXP: BigInt(2750),
      userId: mockPrincipal,
      name: "Ananya Singh",
      rank: BigInt(4),
      level: Level.Scholar,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
    },
    {
      currentXP: BigInt(2100),
      userId: mockPrincipal,
      name: "Vikram Patel",
      rank: BigInt(5),
      level: Level.Scholar,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    },
  ],

  getMyMockTestHistory: async () => [
    {
      id: BigInt(1),
      userId: mockPrincipal,
      testName: "CUET Mock Test - Series 1",
      score: BigInt(142),
      sectionBreakdown: [
        { total: BigInt(40), subject: Subject.English, score: BigInt(34), accuracy: 85 },
        { total: BigInt(40), subject: Subject.Maths, score: BigInt(36), accuracy: 90 },
        { total: BigInt(40), subject: Subject.BusinessStudies, score: BigInt(30), accuracy: 75 },
        { total: BigInt(30), subject: Subject.GeneralTest, score: BigInt(24), accuracy: 80 },
      ],
      totalQuestions: BigInt(150),
      timestamp: BigInt(Date.now() - 7 * 24 * 60 * 60 * 1000),
      timeTaken: BigInt(5400),
      accuracy: 84.7,
    },
    {
      id: BigInt(2),
      userId: mockPrincipal,
      testName: "CUET Mock Test - Series 2",
      score: BigInt(155),
      sectionBreakdown: [
        { total: BigInt(40), subject: Subject.English, score: BigInt(37), accuracy: 92.5 },
        { total: BigInt(40), subject: Subject.Maths, score: BigInt(38), accuracy: 95 },
        { total: BigInt(40), subject: Subject.BusinessStudies, score: BigInt(32), accuracy: 80 },
        { total: BigInt(30), subject: Subject.GeneralTest, score: BigInt(26), accuracy: 86.7 },
      ],
      totalQuestions: BigInt(150),
      timestamp: BigInt(Date.now() - 3 * 24 * 60 * 60 * 1000),
      timeTaken: BigInt(5100),
      accuracy: 89.3,
    },
  ],

  getMyProfile: async () => ({
    id: mockPrincipal,
    joinDate: BigInt(Date.now() - 90 * 24 * 60 * 60 * 1000),
    currentXP: BigInt(1250),
    name: "Arjun Kumar",
    badges: [
      { id: "first_quiz", unlockedAt: BigInt(Date.now() - 80 * 24 * 60 * 60 * 1000) },
      { id: "streak_7", unlockedAt: BigInt(Date.now() - 14 * 24 * 60 * 60 * 1000) },
      { id: "perfect_score", unlockedAt: BigInt(Date.now() - 5 * 24 * 60 * 60 * 1000) },
    ],
    email: "arjun.kumar@example.com",
    level: Level.Scholar,
    lastStudyDate: new Date().toISOString().split("T")[0],
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ArjunKumar",
    bestStreak: BigInt(12),
    currentStreak: BigInt(7),
  }),

  getMyQuizHistory: async () => [
    {
      id: BigInt(1),
      subject: Subject.English,
      userId: mockPrincipal,
      difficulty: Difficulty.Medium,
      score: BigInt(8),
      totalQuestions: BigInt(10),
      timestamp: BigInt(Date.now() - 2 * 24 * 60 * 60 * 1000),
      timeTaken: BigInt(420),
      accuracy: 80,
    },
    {
      id: BigInt(2),
      subject: Subject.Maths,
      userId: mockPrincipal,
      difficulty: Difficulty.Hard,
      score: BigInt(9),
      totalQuestions: BigInt(10),
      timestamp: BigInt(Date.now() - 1 * 24 * 60 * 60 * 1000),
      timeTaken: BigInt(540),
      accuracy: 90,
    },
    {
      id: BigInt(3),
      subject: Subject.BusinessStudies,
      userId: mockPrincipal,
      difficulty: Difficulty.Easy,
      score: BigInt(10),
      totalQuestions: BigInt(10),
      timestamp: BigInt(Date.now() - 3 * 60 * 60 * 1000),
      timeTaken: BigInt(300),
      accuracy: 100,
    },
  ],

  getStreakInfo: async () => ({
    isTodayCompleted: true,
    lastCompletedDate: new Date().toISOString().split("T")[0],
    bestStreak: BigInt(12),
    currentStreak: BigInt(7),
  }),

  getUser: async (_userId) => null,

  isTodayChallengeCompleted: async () => true,

  registerUser: async (args) => ({
    id: mockPrincipal,
    joinDate: BigInt(Date.now()),
    currentXP: BigInt(0),
    name: args.name,
    badges: [],
    email: args.email,
    level: Level.Beginner,
    lastStudyDate: undefined,
    avatarUrl: args.avatarUrl,
    bestStreak: BigInt(0),
    currentStreak: BigInt(0),
  }),

  saveMockTestResult: async (args) => ({
    id: BigInt(Date.now()),
    userId: mockPrincipal,
    testName: args.testName,
    score: args.score,
    sectionBreakdown: args.sectionBreakdown,
    totalQuestions: args.totalQuestions,
    timestamp: BigInt(Date.now()),
    timeTaken: args.timeTaken,
    accuracy: args.accuracy,
  }),

  saveQuizResult: async (args) => ({
    id: BigInt(Date.now()),
    subject: args.subject,
    userId: mockPrincipal,
    difficulty: args.difficulty,
    score: args.score,
    totalQuestions: args.totalQuestions,
    timestamp: BigInt(Date.now()),
    timeTaken: args.timeTaken,
    accuracy: args.accuracy,
  }),

  updateUser: async (args) => ({
    id: mockPrincipal,
    joinDate: BigInt(Date.now() - 90 * 24 * 60 * 60 * 1000),
    currentXP: BigInt(1250),
    name: args.name,
    badges: [],
    email: args.email,
    level: Level.Scholar,
    lastStudyDate: new Date().toISOString().split("T")[0],
    avatarUrl: args.avatarUrl,
    bestStreak: BigInt(12),
    currentStreak: BigInt(7),
  }),
};
