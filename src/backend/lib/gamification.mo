import UserTypes "../types/users";
import GamTypes "../types/gamification";
import CommonTypes "../types/common";
import Map "mo:core/Map";
import Time "mo:core/Time";

module {
  public func calculateLevel(xp : Nat) : CommonTypes.Level {
    if (xp >= 6000) #Topper
    else if (xp >= 3000) #Expert
    else if (xp >= 1500) #Scholar
    else if (xp >= 500) #Amateur
    else #Beginner;
  };

  public func calculateXPAward(
    difficulty : CommonTypes.Difficulty,
    accuracy : Float,
  ) : Nat {
    let base : Nat = switch (difficulty) {
      case (#Easy) 10;
      case (#Medium) 20;
      case (#Hard) 30;
    };
    // XP = base * accuracy (clamped to [0,1]), using float arithmetic
    let clamped : Float = if (accuracy < 0.0) 0.0 else if (accuracy > 1.0) 1.0 else accuracy;
    // Convert to Nat via scaling to avoid Float.toInt dependency:
    // Represent as fraction of base in 10 steps (0.0-1.0 → 0-10 tenths)
    let tenths : Nat =
      if (clamped >= 1.0) 10
      else if (clamped >= 0.9) 9
      else if (clamped >= 0.8) 8
      else if (clamped >= 0.7) 7
      else if (clamped >= 0.6) 6
      else if (clamped >= 0.5) 5
      else if (clamped >= 0.4) 4
      else if (clamped >= 0.3) 3
      else if (clamped >= 0.2) 2
      else if (clamped >= 0.1) 1
      else 0;
    base * tenths / 10;
  };

  private func levelsEqual(a : CommonTypes.Level, b : CommonTypes.Level) : Bool {
    switch (a, b) {
      case (#Beginner, #Beginner) true;
      case (#Amateur, #Amateur) true;
      case (#Scholar, #Scholar) true;
      case (#Expert, #Expert) true;
      case (#Topper, #Topper) true;
      case _ false;
    };
  };

  public func awardXP(
    users : Map.Map<CommonTypes.UserId, UserTypes.UserProfile>,
    args : GamTypes.AwardXPArgs,
  ) : ?GamTypes.XPAwardResult {
    switch (users.get(args.userId)) {
      case null null;
      case (?profile) {
        let xpAwarded = calculateXPAward(args.difficulty, args.accuracy);
        let newTotalXP = profile.currentXP + xpAwarded;
        let newLevel = calculateLevel(newTotalXP);
        let leveledUp = not levelsEqual(profile.level, newLevel);
        profile.currentXP := newTotalXP;
        profile.level := newLevel;
        ?{
          xpAwarded;
          newTotalXP;
          newLevel;
          leveledUp;
        };
      };
    };
  };

  public func awardBadge(
    users : Map.Map<CommonTypes.UserId, UserTypes.UserProfile>,
    userId : CommonTypes.UserId,
    badgeId : Text,
  ) : ?GamTypes.BadgeAwardResult {
    switch (users.get(userId)) {
      case null null;
      case (?profile) {
        let now = Time.now();
        // Check if already has badge
        let alreadyHad = profile.badges.any(func(b : UserTypes.Badge) : Bool = b.id == badgeId);
        if (not alreadyHad) {
          let newBadge : UserTypes.Badge = { id = badgeId; unlockedAt = now };
          profile.badges := profile.badges.concat([newBadge]);
        };
        ?{
          alreadyHad;
          badgeId;
          unlockedAt = now;
        };
      };
    };
  };
};
