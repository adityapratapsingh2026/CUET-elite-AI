import QuizTypes "../types/quiz";
import UserTypes "../types/users";
import GamTypes "../types/gamification";
import CommonTypes "../types/common";
import QuizLib "../lib/quiz";
import GamLib "../lib/gamification";
import Map "mo:core/Map";
import List "mo:core/List";

mixin (
  users : Map.Map<CommonTypes.UserId, UserTypes.UserProfile>,
  quizResults : List.List<QuizTypes.QuizResult>,
  mockTestResults : List.List<QuizTypes.MockTestResult>,
  quizCounter : CommonTypes.Counter,
  mockCounter : CommonTypes.Counter,
) {
  /// Save a completed quiz result and award XP to the user.
  public shared ({ caller }) func saveQuizResult(args : QuizTypes.SaveQuizResultArgs) : async QuizTypes.QuizResult {
    let result = QuizLib.saveQuizResult(quizResults, quizCounter, caller, args);
    let xpArgs : GamTypes.AwardXPArgs = {
      userId = caller;
      difficulty = args.difficulty;
      accuracy = args.accuracy;
    };
    ignore GamLib.awardXP(users, xpArgs);
    result;
  };

  /// Get the last 20 quiz results for the caller.
  public shared query ({ caller }) func getMyQuizHistory() : async [QuizTypes.QuizResult] {
    QuizLib.getQuizHistory(quizResults, caller, 20);
  };

  /// Save a completed mock test result and award XP to the user.
  public shared ({ caller }) func saveMockTestResult(args : QuizTypes.SaveMockTestResultArgs) : async QuizTypes.MockTestResult {
    let result = QuizLib.saveMockTestResult(mockTestResults, mockCounter, caller, args);
    let xpArgs : GamTypes.AwardXPArgs = {
      userId = caller;
      difficulty = #Hard;
      accuracy = args.accuracy;
    };
    ignore GamLib.awardXP(users, xpArgs);
    result;
  };

  /// Get the last 10 mock test results for the caller.
  public shared query ({ caller }) func getMyMockTestHistory() : async [QuizTypes.MockTestResult] {
    QuizLib.getMockTestHistory(mockTestResults, caller, 10);
  };
};
