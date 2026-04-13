import UserTypes "../types/users";
import GamTypes "../types/gamification";
import CommonTypes "../types/common";
import GamLib "../lib/gamification";
import Map "mo:core/Map";

mixin (
  users : Map.Map<CommonTypes.UserId, UserTypes.UserProfile>
) {
  /// Award XP to a user after quiz completion.
  public shared ({ caller }) func awardXP(args : GamTypes.AwardXPArgs) : async ?GamTypes.XPAwardResult {
    GamLib.awardXP(users, args);
  };

  /// Award a badge to a user (idempotent — safe to call multiple times).
  public shared ({ caller }) func awardBadge(userId : CommonTypes.UserId, badgeId : Text) : async ?GamTypes.BadgeAwardResult {
    GamLib.awardBadge(users, userId, badgeId);
  };

  /// Compute the level for a given XP value (pure function).
  public query func calculateLevel(xp : Nat) : async CommonTypes.Level {
    GamLib.calculateLevel(xp);
  };
};
