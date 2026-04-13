import Common "common";

module {
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;

  public type StreakInfo = {
    currentStreak : Nat;
    bestStreak : Nat;
    lastCompletedDate : ?Text; // ISO date string "YYYY-MM-DD"
    isTodayCompleted : Bool;
  };
};
