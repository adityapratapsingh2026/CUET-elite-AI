import Types "../types/quiz";
import CommonTypes "../types/common";
import List "mo:core/List";
import Array "mo:core/Array";
import Time "mo:core/Time";

module {
  public type QuizResult = Types.QuizResult;
  public type MockTestResult = Types.MockTestResult;
  public type SaveQuizResultArgs = Types.SaveQuizResultArgs;
  public type SaveMockTestResultArgs = Types.SaveMockTestResultArgs;

  public func saveQuizResult(
    quizResults : List.List<QuizResult>,
    counter : CommonTypes.Counter,
    caller : CommonTypes.UserId,
    args : SaveQuizResultArgs,
  ) : QuizResult {
    let result : QuizResult = {
      id = counter.value;
      userId = caller;
      subject = args.subject;
      difficulty = args.difficulty;
      score = args.score;
      totalQuestions = args.totalQuestions;
      accuracy = args.accuracy;
      timeTaken = args.timeTaken;
      timestamp = Time.now();
    };
    quizResults.add(result);
    counter.value += 1;
    result;
  };

  public func getQuizHistory(
    quizResults : List.List<QuizResult>,
    userId : CommonTypes.UserId,
    limit : Nat,
  ) : [QuizResult] {
    let sorted = quizResults.filter(func(r : QuizResult) : Bool = r.userId == userId)
      .sort(func(a : QuizResult, b : QuizResult) : { #less; #equal; #greater } {
        if (a.timestamp > b.timestamp) #less
        else if (a.timestamp < b.timestamp) #greater
        else #equal;
      });
    let arr = sorted.toArray();
    let size = if (arr.size() < limit) arr.size() else limit;
    Array.tabulate<QuizResult>(size, func(i) { arr[i] });
  };

  public func saveMockTestResult(
    mockTestResults : List.List<MockTestResult>,
    counter : CommonTypes.Counter,
    caller : CommonTypes.UserId,
    args : SaveMockTestResultArgs,
  ) : MockTestResult {
    let result : MockTestResult = {
      id = counter.value;
      userId = caller;
      testName = args.testName;
      score = args.score;
      totalQuestions = args.totalQuestions;
      accuracy = args.accuracy;
      timeTaken = args.timeTaken;
      sectionBreakdown = args.sectionBreakdown;
      timestamp = Time.now();
    };
    mockTestResults.add(result);
    counter.value += 1;
    result;
  };

  public func getMockTestHistory(
    mockTestResults : List.List<MockTestResult>,
    userId : CommonTypes.UserId,
    limit : Nat,
  ) : [MockTestResult] {
    let sorted = mockTestResults.filter(func(r : MockTestResult) : Bool = r.userId == userId)
      .sort(func(a : MockTestResult, b : MockTestResult) : { #less; #equal; #greater } {
        if (a.timestamp > b.timestamp) #less
        else if (a.timestamp < b.timestamp) #greater
        else #equal;
      });
    let arr = sorted.toArray();
    let size = if (arr.size() < limit) arr.size() else limit;
    Array.tabulate<MockTestResult>(size, func(i) { arr[i] });
  };
};
