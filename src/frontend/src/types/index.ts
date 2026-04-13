export type { Subject, Difficulty, Level } from "../backend.d";

export interface QuizQuestion {
  id: string;
  subject: "English" | "BusinessStudies" | "Accounts" | "Maths" | "GeneralTest";
  difficulty: "Easy" | "Medium" | "Hard";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
  isPYQ?: boolean;
}

export interface QuizSessionResult {
  subject: "English" | "BusinessStudies" | "Accounts" | "Maths" | "GeneralTest";
  difficulty: "Easy" | "Medium" | "Hard";
  score: number;
  totalQuestions: number;
  accuracy: number;
  timeTaken: number;
  answers: number[];
  xpEarned: number;
}

export interface MockTestSection {
  subject: "English" | "BusinessStudies" | "Accounts" | "Maths" | "GeneralTest";
  questions: QuizQuestion[];
}

export interface MockTest {
  id: string;
  name: string;
  description: string;
  totalQuestions: number;
  durationMinutes: number;
  sections: MockTestSection[];
}

export interface NoteItem {
  id: string;
  subject: "English" | "BusinessStudies" | "Accounts" | "Maths" | "GeneralTest";
  topic: string;
  title: string;
  content: string;
  keyPoints: string[];
  tags: string[];
  difficulty?: "Easy" | "Medium" | "Hard";
}

export interface VocabularyWord {
  word: string;
  meaning: string;
  synonyms: string[];
  antonyms: string[];
  example: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface PhrasalVerb {
  phrase: string;
  meaning: string;
  example: string;
}

export interface Idiom {
  phrase: string;
  meaning: string;
  example: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  xpRequired: number;
  color: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatarUrl: string;
  currentXP: number;
  level: string;
  streak: number;
}

export interface MotivationalQuote {
  text: string;
  author: string;
}

export interface GameState {
  xp: number;
  level: string;
  streak: number;
  badges: string[];
  completedChallenges: string[];
}
