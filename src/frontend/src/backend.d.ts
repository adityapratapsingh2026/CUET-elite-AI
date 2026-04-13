import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AwardXPArgs {
    userId: UserId;
    difficulty: Difficulty;
    accuracy: number;
}
export interface LeaderboardEntry {
    currentXP: bigint;
    userId: UserId;
    name: string;
    rank: bigint;
    level: Level;
    avatarUrl: string;
}
export type Timestamp = bigint;
export interface StreakInfo {
    isTodayCompleted: boolean;
    lastCompletedDate?: string;
    bestStreak: bigint;
    currentStreak: bigint;
}
export interface RegisterUserArgs {
    name: string;
    email: string;
    avatarUrl: string;
}
export interface MockTestResult {
    id: bigint;
    userId: UserId;
    testName: string;
    score: bigint;
    sectionBreakdown: Array<SectionBreakdown>;
    totalQuestions: bigint;
    timestamp: Timestamp;
    timeTaken: bigint;
    accuracy: number;
}
export interface SaveQuizResultArgs {
    subject: Subject;
    difficulty: Difficulty;
    score: bigint;
    totalQuestions: bigint;
    timeTaken: bigint;
    accuracy: number;
}
export interface QuizResult {
    id: bigint;
    subject: Subject;
    userId: UserId;
    difficulty: Difficulty;
    score: bigint;
    totalQuestions: bigint;
    timestamp: Timestamp;
    timeTaken: bigint;
    accuracy: number;
}
export interface UserProfilePublic {
    id: UserId;
    joinDate: Timestamp;
    currentXP: bigint;
    name: string;
    badges: Array<Badge>;
    email: string;
    level: Level;
    lastStudyDate?: string;
    avatarUrl: string;
    bestStreak: bigint;
    currentStreak: bigint;
}
export interface XPAwardResult {
    xpAwarded: bigint;
    newTotalXP: bigint;
    leveledUp: boolean;
    newLevel: Level;
}
export interface Badge {
    id: string;
    unlockedAt: Timestamp;
}
export type UserId = Principal;
export interface BadgeAwardResult {
    unlockedAt: Timestamp;
    alreadyHad: boolean;
    badgeId: string;
}
export interface SectionBreakdown {
    total: bigint;
    subject: Subject;
    score: bigint;
    accuracy: number;
}
export interface SaveMockTestResultArgs {
    testName: string;
    score: bigint;
    sectionBreakdown: Array<SectionBreakdown>;
    totalQuestions: bigint;
    timeTaken: bigint;
    accuracy: number;
}
export interface UpdateUserArgs {
    name: string;
    email: string;
    avatarUrl: string;
}
export enum Difficulty {
    Easy = "Easy",
    Hard = "Hard",
    Medium = "Medium"
}
export enum Level {
    Beginner = "Beginner",
    Scholar = "Scholar",
    Amateur = "Amateur",
    Topper = "Topper",
    Expert = "Expert"
}
export enum Subject {
    Accounts = "Accounts",
    GeneralTest = "GeneralTest",
    Maths = "Maths",
    English = "English",
    BusinessStudies = "BusinessStudies"
}
export interface backendInterface {
    awardBadge(userId: UserId, badgeId: string): Promise<BadgeAwardResult | null>;
    awardXP(args: AwardXPArgs): Promise<XPAwardResult | null>;
    calculateLevel(xp: bigint): Promise<Level>;
    completeDailyChallenge(): Promise<StreakInfo | null>;
    getLeaderboard(): Promise<Array<LeaderboardEntry>>;
    getMyMockTestHistory(): Promise<Array<MockTestResult>>;
    getMyProfile(): Promise<UserProfilePublic | null>;
    getMyQuizHistory(): Promise<Array<QuizResult>>;
    getStreakInfo(): Promise<StreakInfo | null>;
    getUser(userId: UserId): Promise<UserProfilePublic | null>;
    isTodayChallengeCompleted(): Promise<boolean>;
    registerUser(args: RegisterUserArgs): Promise<UserProfilePublic>;
    saveMockTestResult(args: SaveMockTestResultArgs): Promise<MockTestResult>;
    saveQuizResult(args: SaveQuizResultArgs): Promise<QuizResult>;
    updateUser(args: UpdateUserArgs): Promise<UserProfilePublic | null>;
}
