import type { MockTest } from "../types";
import { questions } from "./questions";

const englishQs = questions.filter((q) => q.subject === "English");
const bsQs = questions.filter((q) => q.subject === "BusinessStudies");
const acQs = questions.filter((q) => q.subject === "Accounts");
const maQs = questions.filter((q) => q.subject === "Maths");
const gatQs = questions.filter((q) => q.subject === "GeneralTest");

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
}

export const mockTestMeta: MockTestMeta[] = [
  {
    id: "mock-001",
    name: "CUET Full Mock Test — Series 1",
    description:
      "Complete CUET simulation across all 5 domains. Mirror of the actual CUET UG pattern.",
    totalQuestions: 50,
    durationMinutes: 90,
    difficulty: "Medium",
    averageScore: 68,
    attemptCount: 12430,
    tags: ["Full Length", "All Sections", "Official Pattern"],
  },
  {
    id: "mock-002",
    name: "CUET Speed Test — Commerce Focus",
    description:
      "High-speed Commerce mock emphasizing Business Studies and Accounts mastery.",
    totalQuestions: 40,
    durationMinutes: 60,
    difficulty: "Hard",
    averageScore: 61,
    attemptCount: 8250,
    tags: ["Commerce", "Speed Test", "Business Studies"],
  },
  {
    id: "mock-003",
    name: "CUET GAT Mastery Mock",
    description:
      "Focused General Aptitude test with logical reasoning, quantitative aptitude, and GK.",
    totalQuestions: 30,
    durationMinutes: 45,
    difficulty: "Medium",
    averageScore: 72,
    attemptCount: 9870,
    tags: ["GAT", "Aptitude", "Reasoning"],
  },
  {
    id: "mock-004",
    name: "CUET English Proficiency Test",
    description:
      "Deep English section coverage — vocabulary, grammar, comprehension and idioms.",
    totalQuestions: 25,
    durationMinutes: 40,
    difficulty: "Easy",
    averageScore: 78,
    attemptCount: 11200,
    tags: ["English", "Vocabulary", "Grammar"],
  },
  {
    id: "mock-005",
    name: "CUET Grand Final Simulation",
    description:
      "Ultimate full-length test under strict exam conditions. Best for final-week prep.",
    totalQuestions: 50,
    durationMinutes: 90,
    difficulty: "Hard",
    averageScore: 55,
    attemptCount: 6540,
    tags: ["Final Exam", "Timed", "Comprehensive"],
  },
];

export const mockTests: MockTest[] = [
  {
    id: "mock-001",
    name: "CUET Full Mock Test — Series 1",
    description: "Complete CUET simulation across all 5 domains.",
    totalQuestions: 50,
    durationMinutes: 90,
    sections: [
      { subject: "English", questions: englishQs.slice(0, 10) },
      { subject: "BusinessStudies", questions: bsQs.slice(0, 10) },
      { subject: "Accounts", questions: acQs.slice(0, 10) },
      { subject: "Maths", questions: maQs.slice(0, 10) },
      { subject: "GeneralTest", questions: gatQs.slice(0, 10) },
    ],
  },
  {
    id: "mock-002",
    name: "CUET Speed Test — Commerce Focus",
    description: "High-speed Commerce section mock.",
    totalQuestions: 40,
    durationMinutes: 60,
    sections: [
      { subject: "English", questions: englishQs.slice(0, 8) },
      { subject: "BusinessStudies", questions: bsQs.slice(0, 11) },
      { subject: "Accounts", questions: acQs.slice(0, 11) },
      { subject: "GeneralTest", questions: gatQs.slice(0, 10) },
    ],
  },
  {
    id: "mock-003",
    name: "CUET GAT Mastery Mock",
    description: "Focused General Aptitude test.",
    totalQuestions: 30,
    durationMinutes: 45,
    sections: [
      { subject: "GeneralTest", questions: gatQs.slice(0, 11) },
      { subject: "Maths", questions: maQs.slice(0, 10) },
      { subject: "English", questions: englishQs.slice(0, 9) },
    ],
  },
  {
    id: "mock-004",
    name: "CUET English Proficiency Test",
    description: "Deep English section coverage.",
    totalQuestions: 25,
    durationMinutes: 40,
    sections: [{ subject: "English", questions: englishQs.slice(0, 25) }],
  },
  {
    id: "mock-005",
    name: "CUET Grand Final Simulation",
    description: "Ultimate full-length test under strict exam conditions.",
    totalQuestions: 50,
    durationMinutes: 90,
    sections: [
      { subject: "English", questions: englishQs.slice(0, 10) },
      { subject: "BusinessStudies", questions: bsQs.slice(0, 10) },
      { subject: "Accounts", questions: acQs.slice(0, 10) },
      { subject: "Maths", questions: maQs.slice(0, 10) },
      { subject: "GeneralTest", questions: gatQs.slice(0, 10) },
    ],
  },
];
