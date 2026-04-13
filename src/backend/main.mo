import UserTypes "types/users";
import QuizTypes "types/quiz";
import CommonTypes "types/common";
import Map "mo:core/Map";
import List "mo:core/List";

import UsersApi "mixins/users-api";
import QuizApi "mixins/quiz-api";
import GamificationApi "mixins/gamification-api";
import DailyChallengeApi "mixins/dailychallenge-api";

actor {
  // --- Stable State ---
  let users = Map.empty<CommonTypes.UserId, UserTypes.UserProfile>();
  let quizResults = List.empty<QuizTypes.QuizResult>();
  let mockTestResults = List.empty<QuizTypes.MockTestResult>();
  let quizCounter = CommonTypes.newCounter(0);
  let mockCounter = CommonTypes.newCounter(0);

  // --- Mixin Composition ---
  include UsersApi(users);
  include QuizApi(users, quizResults, mockTestResults, quizCounter, mockCounter);
  include GamificationApi(users);
  include DailyChallengeApi(users);
};
