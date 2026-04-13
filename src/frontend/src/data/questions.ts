import type { QuizQuestion } from "../types";
import { accountsQuestions } from "./questionsAccounts";
import { bstQuestions } from "./questionsBST";
import { englishQuestions } from "./questionsEnglish";
import { gatQuestions } from "./questionsGAT";
import { mathsQuestions } from "./questionsMaths";

export const questions: QuizQuestion[] = [
  ...englishQuestions,
  ...bstQuestions,
  ...accountsQuestions,
  ...mathsQuestions,
  ...gatQuestions,
];

export const getQuestionsBySubject = (
  subject: QuizQuestion["subject"],
  difficulty?: QuizQuestion["difficulty"],
  count = 10,
): QuizQuestion[] => {
  let filtered = questions.filter((q) => q.subject === subject);
  if (difficulty)
    filtered = filtered.filter((q) => q.difficulty === difficulty);
  // Shuffle for variety, then take count
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const allSubjects = [
  "English",
  "BusinessStudies",
  "Accounts",
  "Maths",
  "GeneralTest",
] as const;
