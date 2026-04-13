import Common "common";

module {
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;
  public type Difficulty = Common.Difficulty;
  public type Level = Common.Level;

  public type AwardXPArgs = {
    userId : UserId;
    difficulty : Difficulty;
    accuracy : Float;
  };

  public type XPAwardResult = {
    xpAwarded : Nat;
    newTotalXP : Nat;
    newLevel : Level;
    leveledUp : Bool;
  };

  public type BadgeAwardResult = {
    alreadyHad : Bool;
    badgeId : Text;
    unlockedAt : Timestamp;
  };
};
