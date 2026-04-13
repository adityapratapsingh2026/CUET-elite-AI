import Common "common";

module {
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;
  public type Subject = Common.Subject;
  public type Difficulty = Common.Difficulty;

  public type SectionBreakdown = {
    subject : Subject;
    score : Nat;
    total : Nat;
    accuracy : Float;
  };

  public type QuizResult = {
    id : Nat;
    userId : UserId;
    subject : Subject;
    difficulty : Difficulty;
    score : Nat;
    totalQuestions : Nat;
    accuracy : Float;
    timeTaken : Nat; // seconds
    timestamp : Timestamp;
  };

  public type SaveQuizResultArgs = {
    subject : Subject;
    difficulty : Difficulty;
    score : Nat;
    totalQuestions : Nat;
    accuracy : Float;
    timeTaken : Nat;
  };

  public type MockTestResult = {
    id : Nat;
    userId : UserId;
    testName : Text;
    score : Nat;
    totalQuestions : Nat;
    accuracy : Float;
    timeTaken : Nat; // seconds
    sectionBreakdown : [SectionBreakdown];
    timestamp : Timestamp;
  };

  public type SaveMockTestResultArgs = {
    testName : Text;
    score : Nat;
    totalQuestions : Nat;
    accuracy : Float;
    timeTaken : Nat;
    sectionBreakdown : [SectionBreakdown];
  };
};
