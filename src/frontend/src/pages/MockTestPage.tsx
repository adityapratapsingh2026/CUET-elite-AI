import {
  type MockTestMeta,
  generateMockTest,
  generateMockTestMeta,
} from "@/data/mockTestGenerator";
import { questions } from "@/data/questions";
import { useGameState } from "@/hooks/useGameState";
import type { QuizQuestion } from "@/types";
import { useCallback, useMemo, useState } from "react";
import { ExamInterface } from "./mock-test/ExamInterface";
import { MockTestSelection } from "./mock-test/MockTestSelection";
import { ResultScreen } from "./mock-test/ResultScreen";
import { ReviewScreen } from "./mock-test/ReviewScreen";

export type ExamPhase = "selection" | "exam" | "result" | "review";

export interface ExamAnswer {
  questionIndex: number;
  selectedIndex: number | null;
  flagged: boolean;
  timeSpent: number;
}

export interface SectionResult {
  subject: string;
  total: number;
  attempted: number;
  correct: number;
  score: number;
}

export interface TestResult {
  testId: string;
  testName: string;
  totalQuestions: number;
  answers: ExamAnswer[];
  questions: QuizQuestion[];
  timeTaken: number;
  tabViolations: number;
  completedAt: number;
  sectionResults: SectionResult[];
  totalScore: number;
  accuracy: number;
  xpEarned: number;
}

export function MockTestPage() {
  const [phase, setPhase] = useState<ExamPhase>("selection");
  const [selectedMeta, setSelectedMeta] = useState<MockTestMeta | null>(null);
  const [flatQuestions, setFlatQuestions] = useState<QuizQuestion[]>([]);
  const [result, setResult] = useState<TestResult | null>(null);
  const { addXP, unlockBadge } = useGameState();

  // Generate all 50 mock tests per subject (250 total) once
  const allMockTestMeta = useMemo(
    () =>
      generateMockTestMeta("English")
        .concat(generateMockTestMeta("BusinessStudies"))
        .concat(generateMockTestMeta("Accounts"))
        .concat(generateMockTestMeta("Maths"))
        .concat(generateMockTestMeta("GeneralTest")),
    [],
  );

  const handleStartTest = useCallback((meta: MockTestMeta) => {
    // Get subject-specific questions for strict isolation
    const subjectQuestions = questions.filter(
      (q) => q.subject === meta.subject,
    );
    const test = generateMockTest(meta, subjectQuestions);
    const flat: QuizQuestion[] = test.sections.flatMap((s) => s.questions);
    setFlatQuestions(flat);
    setSelectedMeta(meta);
    setPhase("exam");
  }, []);

  const handleSubmit = useCallback(
    (answers: ExamAnswer[], timeTaken: number, tabViolations: number) => {
      if (!selectedMeta) return;

      // Recompute section results from flat questions (single-subject test)
      const sectionResults: SectionResult[] = [
        {
          subject: selectedMeta.subject,
          total: flatQuestions.length,
          attempted: answers.filter((a) => a.selectedIndex !== null).length,
          correct: answers.filter(
            (a, i) => a.selectedIndex === flatQuestions[i]?.correctIndex,
          ).length,
          score: 0,
        },
      ];
      sectionResults[0].score = Math.round(
        (sectionResults[0].correct / sectionResults[0].total) * 100,
      );

      const totalCorrect = sectionResults[0].correct;
      const totalAttempted = sectionResults[0].attempted;
      const accuracy =
        totalAttempted > 0
          ? Math.round((totalCorrect / totalAttempted) * 100)
          : 0;
      const totalScore = Math.round(
        (totalCorrect / flatQuestions.length) * 100,
      );
      const xpEarned = totalCorrect * 5 + (totalScore >= 80 ? 100 : 0);

      const res: TestResult = {
        testId: selectedMeta.id,
        testName: selectedMeta.name,
        totalQuestions: flatQuestions.length,
        answers,
        questions: flatQuestions,
        timeTaken,
        tabViolations,
        completedAt: Date.now(),
        sectionResults,
        totalScore,
        accuracy,
        xpEarned,
      };

      addXP(xpEarned);
      if (totalScore === 100) unlockBadge("perfect-score");
      unlockBadge("first-quiz");

      const history: TestResult[] = JSON.parse(
        localStorage.getItem("mockTestHistory") ?? "[]",
      );
      localStorage.setItem(
        "mockTestHistory",
        JSON.stringify([res, ...history].slice(0, 20)),
      );

      setResult(res);
      setPhase("result");
    },
    [selectedMeta, flatQuestions, addXP, unlockBadge],
  );

  const handleReview = useCallback(() => setPhase("review"), []);

  const handleBackToSelection = useCallback(() => {
    setPhase("selection");
    setSelectedMeta(null);
    setResult(null);
    setFlatQuestions([]);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {phase === "selection" && (
        <MockTestSelection
          tests={allMockTestMeta}
          onStartTest={handleStartTest}
        />
      )}
      {phase === "exam" && selectedMeta && (
        <ExamInterface
          meta={selectedMeta}
          questions={flatQuestions}
          onSubmit={handleSubmit}
          onAbort={handleBackToSelection}
        />
      )}
      {phase === "result" && result && (
        <ResultScreen
          result={result}
          averageScore={selectedMeta?.averageScore ?? 60}
          onReview={handleReview}
          onBack={handleBackToSelection}
        />
      )}
      {phase === "review" && result && (
        <ReviewScreen result={result} onBack={() => setPhase("result")} />
      )}
    </div>
  );
}
