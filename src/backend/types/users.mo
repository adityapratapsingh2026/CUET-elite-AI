import Common "common";

module {
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;
  public type Level = Common.Level;

  public type Badge = {
    id : Text;
    unlockedAt : Timestamp;
  };

  public type UserProfile = {
    id : UserId;
    var name : Text;
    var email : Text;
    joinDate : Timestamp;
    var avatarUrl : Text;
    var currentXP : Nat;
    var level : Level;
    var currentStreak : Nat;
    var bestStreak : Nat;
    var lastStudyDate : ?Text; // ISO date string "YYYY-MM-DD"
    var badges : [Badge];
  };

  // Public (shared) version of UserProfile — no var fields
  public type UserProfilePublic = {
    id : UserId;
    name : Text;
    email : Text;
    joinDate : Timestamp;
    avatarUrl : Text;
    currentXP : Nat;
    level : Level;
    currentStreak : Nat;
    bestStreak : Nat;
    lastStudyDate : ?Text;
    badges : [Badge];
  };

  public type RegisterUserArgs = {
    name : Text;
    email : Text;
    avatarUrl : Text;
  };

  public type UpdateUserArgs = {
    name : Text;
    email : Text;
    avatarUrl : Text;
  };

  public type LeaderboardEntry = {
    rank : Nat;
    userId : UserId;
    name : Text;
    avatarUrl : Text;
    currentXP : Nat;
    level : Level;
  };
};
