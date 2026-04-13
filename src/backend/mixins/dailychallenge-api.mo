import UserTypes "../types/users";
import DcTypes "../types/dailychallenge";
import CommonTypes "../types/common";
import DcLib "../lib/dailychallenge";
import Map "mo:core/Map";
import Time "mo:core/Time";

mixin (
  users : Map.Map<CommonTypes.UserId, UserTypes.UserProfile>
) {
  /// Mark today's daily challenge as completed for the caller. Updates streak.
  public shared ({ caller }) func completeDailyChallenge() : async ?DcTypes.StreakInfo {
    let today = DcLib.timestampToDate(Time.now());
    DcLib.markTodayCompleted(users, caller, today);
  };

  /// Get the caller's current streak info.
  public shared query ({ caller }) func getStreakInfo() : async ?DcTypes.StreakInfo {
    let today = DcLib.timestampToDate(Time.now());
    DcLib.getStreakInfo(users, caller, today);
  };

  /// Check whether the caller has already completed today's challenge.
  public shared query ({ caller }) func isTodayChallengeCompleted() : async Bool {
    let today = DcLib.timestampToDate(Time.now());
    DcLib.isTodayCompleted(users, caller, today);
  };
};
