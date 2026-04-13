import UserTypes "../types/users";
import CommonTypes "../types/common";
import UserLib "../lib/users";
import Map "mo:core/Map";

mixin (
  users : Map.Map<CommonTypes.UserId, UserTypes.UserProfile>
) {
  /// Register the caller's profile. Overwrites if already exists.
  public shared ({ caller }) func registerUser(args : UserTypes.RegisterUserArgs) : async UserTypes.UserProfilePublic {
    UserLib.register(users, caller, args);
  };

  /// Update the caller's existing profile.
  public shared ({ caller }) func updateUser(args : UserTypes.UpdateUserArgs) : async ?UserTypes.UserProfilePublic {
    UserLib.update(users, caller, args);
  };

  /// Get any user's public profile by principal.
  public query func getUser(userId : CommonTypes.UserId) : async ?UserTypes.UserProfilePublic {
    UserLib.get(users, userId);
  };

  /// Get the caller's own profile.
  public shared query ({ caller }) func getMyProfile() : async ?UserTypes.UserProfilePublic {
    UserLib.get(users, caller);
  };

  /// Get top 10 users by XP for the leaderboard.
  public query func getLeaderboard() : async [UserTypes.LeaderboardEntry] {
    UserLib.getLeaderboard(users, 10);
  };
};
