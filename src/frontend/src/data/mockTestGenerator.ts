import type { MockTest, MockTestSection, QuizQuestion } from "../types";

export interface MockTestMeta {
  id: string;
  name: string;
  description: string;
  totalQuestions: number;
  durationMinutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  averageScore: number;
  attemptCount: number;
  tags: string[];
  subject: QuizQuestion["subject"];
}

// Deterministic pseudo-shuffle using a seed (no external deps)
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  let s = seed;
  for (let i = result.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const SUBJECT_LABELS: Record<QuizQuestion["subject"], string> = {
  English: "English",
  BusinessStudies: "Business Studies",
  Accounts: "Accounts",
  Maths: "Mathematics",
  GeneralTest: "General Test",
};

const SUBJECT_TAGS: Record<QuizQuestion["subject"], string[]> = {
  English: ["English", "Grammar", "Vocabulary"],
  BusinessStudies: ["Commerce", "Management", "Business Studies"],
  Accounts: ["Commerce", "Accounts", "Finance"],
  Maths: ["Mathematics", "Calculus", "Algebra"],
  GeneralTest: ["GAT", "Aptitude", "Reasoning"],
};

const DIFFICULTY_CYCLE: Array<MockTestMeta["difficulty"]> = [
  "Easy",
  "Medium",
  "Medium",
  "Hard",
  "Medium",
];

// Base attempt counts per subject (realistic variation)
const BASE_ATTEMPTS: Record<QuizQuestion["subject"], number> = {
  English: 9200,
  BusinessStudies: 7800,
  Accounts: 7100,
  Maths: 6400,
  GeneralTest: 8500,
};

const BASE_SCORES: Record<QuizQuestion["subject"], number> = {
  English: 72,
  BusinessStudies: 66,
  Accounts: 63,
  Maths: 60,
  GeneralTest: 70,
};

/**
 * Generates 50 MockTestMeta objects for a given subject.
 * Each test has a stable, deterministic structure based on test number.
 */
export function generateMockTestMeta(
  subject: QuizQuestion["subject"],
): MockTestMeta[] {
  const label = SUBJECT_LABELS[subject];
  const tags = SUBJECT_TAGS[subject];
  const baseAttempts = BASE_ATTEMPTS[subject];
  const baseScore = BASE_SCORES[subject];

  return Array.from({ length: 50 }, (_, i) => {
    const num = i + 1;
    const padded = String(num).padStart(2, "0");
    const difficulty = DIFFICULTY_CYCLE[i % DIFFICULTY_CYCLE.length];
    // Vary scores and attempts slightly per test
    const scoreDelta = ((num * 7) % 15) - 7; // -7 to +7
    const attemptDelta = Math.floor(((num * 113) % 3000) - 1500);

    return {
      id: `mock_${subject.toLowerCase().replace("businessstudies", "bst").replace("generaltest", "gat")}_${padded}`,
      name: `${label} Mock Test — ${num <= 10 ? `Series ${num}` : num <= 30 ? `Practice ${num}` : `Advanced ${num}`}`,
      description:
        num <= 10
          ? `Foundation series ${num}: Core ${label} concepts aligned to CUET syllabus.`
          : num <= 30
            ? `Practice set ${num}: Progressive difficulty with topic-wise ${label} coverage.`
            : `Advanced mock ${num}: High-difficulty ${label} simulation for final preparation.`,
      totalQuestions: 50,
      durationMinutes: 60,
      difficulty,
      averageScore: Math.max(40, Math.min(85, baseScore + scoreDelta)),
      attemptCount: Math.max(500, baseAttempts + attemptDelta),
      tags:
        num <= 10 ? [...tags, "PYQ"] : num > 40 ? [...tags, "Advanced"] : tags,
      subject,
    };
  });
}

/**
 * Generates a MockTest (with actual questions) for a given meta entry.
 * Questions are sampled from the subject-specific pool using a deterministic seed.
 * Strict subject isolation: only questions from the correct subject are used.
 */
export function generateMockTest(
  meta: MockTestMeta,
  subjectQuestions: QuizQuestion[],
): MockTest {
  // Strict isolation: only use questions matching the meta's subject
  const pool = subjectQuestions.filter((q) => q.subject === meta.subject);

  // Extract test number from id for seed
  const parts = meta.id.split("_");
  const testNum = Number.parseInt(parts[parts.length - 1], 10) || 1;

  const shuffled = seededShuffle(pool, testNum * 997 + 42);

  // Pick 50 questions (or as many as available)
  const selected = shuffled.slice(0, 50);

  const section: MockTestSection = {
    subject: meta.subject,
    questions: selected,
  };

  return {
    id: meta.id,
    name: meta.name,
    description: meta.description,
    totalQuestions: selected.length,
    durationMinutes: meta.durationMinutes,
    sections: [section],
  };
}

/**
 * Generates all 50 MockTestMeta entries for a subject.
 * Use generateMockTest() lazily to get the actual MockTest when needed.
 */
export function generateAllMockTestMeta(): MockTestMeta[] {
  const subjects: QuizQuestion["subject"][] = [
    "English",
    "BusinessStudies",
    "Accounts",
    "Maths",
    "GeneralTest",
  ];
  return subjects.flatMap((subject) => generateMockTestMeta(subject));
}
