import Types "../types/users";
import CommonTypes "../types/common";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Time "mo:core/Time";

module {
  public type UserProfile = Types.UserProfile;
  public type UserProfilePublic = Types.UserProfilePublic;
  public type RegisterUserArgs = Types.RegisterUserArgs;
  public type UpdateUserArgs = Types.UpdateUserArgs;
  public type LeaderboardEntry = Types.LeaderboardEntry;

  public func toPublic(self : UserProfile) : UserProfilePublic {
    {
      id = self.id;
      name = self.name;
      email = self.email;
      joinDate = self.joinDate;
      avatarUrl = self.avatarUrl;
      currentXP = self.currentXP;
      level = self.level;
      currentStreak = self.currentStreak;
      bestStreak = self.bestStreak;
      lastStudyDate = self.lastStudyDate;
      badges = self.badges;
    };
  };

  public func register(
    users : Map.Map<CommonTypes.UserId, UserProfile>,
    caller : CommonTypes.UserId,
    args : RegisterUserArgs,
  ) : UserProfilePublic {
    let profile : UserProfile = {
      id = caller;
      var name = args.name;
      var email = args.email;
      joinDate = Time.now();
      var avatarUrl = args.avatarUrl;
      var currentXP = 0;
      var level = #Beginner;
      var currentStreak = 0;
      var bestStreak = 0;
      var lastStudyDate = null;
      var badges = [];
    };
    users.add(caller, profile);
    toPublic(profile);
  };

  public func update(
    users : Map.Map<CommonTypes.UserId, UserProfile>,
    caller : CommonTypes.UserId,
    args : UpdateUserArgs,
  ) : ?UserProfilePublic {
    switch (users.get(caller)) {
      case null null;
      case (?profile) {
        profile.name := args.name;
        profile.email := args.email;
        profile.avatarUrl := args.avatarUrl;
        ?toPublic(profile);
      };
    };
  };

  public func get(
    users : Map.Map<CommonTypes.UserId, UserProfile>,
    userId : CommonTypes.UserId,
  ) : ?UserProfilePublic {
    switch (users.get(userId)) {
      case null null;
      case (?profile) ?toPublic(profile);
    };
  };

  public func getLeaderboard(
    users : Map.Map<CommonTypes.UserId, UserProfile>,
    topN : Nat,
  ) : [LeaderboardEntry] {
    let allEntries : [LeaderboardEntry] = users.entries().map<(CommonTypes.UserId, UserProfile), LeaderboardEntry>(
      func((_, p)) {
        {
          rank = 0; // filled in after sort
          userId = p.id;
          name = p.name;
          avatarUrl = p.avatarUrl;
          currentXP = p.currentXP;
          level = p.level;
        };
      }
    ).toArray();

    let sorted = allEntries.sort(
      func(a : LeaderboardEntry, b : LeaderboardEntry) : { #less; #equal; #greater } {
        if (a.currentXP > b.currentXP) #less
        else if (a.currentXP < b.currentXP) #greater
        else #equal;
      }
    );

    let limit = if (sorted.size() < topN) sorted.size() else topN;
    Array.tabulate<LeaderboardEntry>(
      limit,
      func(i) { { sorted[i] with rank = i + 1 } },
    );
  };

  public func calculateLevel(xp : Nat) : CommonTypes.Level {
    if (xp >= 6000) #Topper
    else if (xp >= 3000) #Expert
    else if (xp >= 1500) #Scholar
    else if (xp >= 500) #Amateur
    else #Beginner;
  };
};
