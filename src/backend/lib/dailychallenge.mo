import UserTypes "../types/users";
import DcTypes "../types/dailychallenge";
import CommonTypes "../types/common";
import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  /// Convert a nanosecond timestamp to "YYYY-MM-DD" ISO date string.
  /// Uses Unix epoch math: days since 1970-01-01.
  public func timestampToDate(ts : CommonTypes.Timestamp) : Text {
    // Convert nanoseconds to days since epoch
    let secondsPerDay : Int = 86400;
    let totalSeconds : Int = ts / 1_000_000_000;
    let daysSinceEpoch : Int = totalSeconds / secondsPerDay;

    // Gregorian calendar algorithm (civil date from day number)
    // Based on Fliegel & van Flandern algorithm adapted for Unix epoch
    let z : Int = daysSinceEpoch + 719468;
    let era : Int = (if (z >= 0) z else z - 146096) / 146097;
    let doe : Int = z - era * 146097;
    let yoe : Int = (doe - doe / 1460 + doe / 36524 - doe / 146096) / 365;
    let y : Int = yoe + era * 400;
    let doy : Int = doe - (365 * yoe + yoe / 4 - yoe / 100);
    let mp : Int = (5 * doy + 2) / 153;
    let d : Int = doy - (153 * mp + 2) / 5 + 1;
    let m : Int = mp + (if (mp < 10) 3 else -9);
    let finalY : Int = y + (if (m <= 2) 1 else 0);

    // Format as "YYYY-MM-DD" with zero-padding
    let yStr = finalY.toText();
    let mStr = if (m < 10) "0" # m.toText() else m.toText();
    let dStr = if (d < 10) "0" # d.toText() else d.toText();
    yStr # "-" # mStr # "-" # dStr;
  };

  public func markTodayCompleted(
    users : Map.Map<CommonTypes.UserId, UserTypes.UserProfile>,
    userId : CommonTypes.UserId,
    todayDate : Text,
  ) : ?DcTypes.StreakInfo {
    switch (users.get(userId)) {
      case null null;
      case (?profile) {
        let alreadyDone = switch (profile.lastStudyDate) {
          case (?d) d == todayDate;
          case null false;
        };
        if (not alreadyDone) {
          // Determine if streak continues (yesterday completed) or resets
          let newStreak = switch (profile.lastStudyDate) {
            case (?lastDate) {
              if (isYesterday(lastDate, todayDate)) {
                profile.currentStreak + 1;
              } else {
                1; // streak broken — restart
              };
            };
            case null 1; // first ever completion
          };
          profile.currentStreak := newStreak;
          profile.lastStudyDate := ?todayDate;
          if (newStreak > profile.bestStreak) {
            profile.bestStreak := newStreak;
          };
        };
        ?{
          currentStreak = profile.currentStreak;
          bestStreak = profile.bestStreak;
          lastCompletedDate = profile.lastStudyDate;
          isTodayCompleted = true;
        };
      };
    };
  };

  public func getStreakInfo(
    users : Map.Map<CommonTypes.UserId, UserTypes.UserProfile>,
    userId : CommonTypes.UserId,
    todayDate : Text,
  ) : ?DcTypes.StreakInfo {
    switch (users.get(userId)) {
      case null null;
      case (?profile) {
        let todayDone = switch (profile.lastStudyDate) {
          case (?d) d == todayDate;
          case null false;
        };
        ?{
          currentStreak = profile.currentStreak;
          bestStreak = profile.bestStreak;
          lastCompletedDate = profile.lastStudyDate;
          isTodayCompleted = todayDone;
        };
      };
    };
  };

  public func isTodayCompleted(
    users : Map.Map<CommonTypes.UserId, UserTypes.UserProfile>,
    userId : CommonTypes.UserId,
    todayDate : Text,
  ) : Bool {
    switch (users.get(userId)) {
      case null false;
      case (?profile) {
        switch (profile.lastStudyDate) {
          case (?d) d == todayDate;
          case null false;
        };
      };
    };
  };

  /// Check whether `prev` is the calendar day immediately before `curr`.
  /// Both strings must be valid "YYYY-MM-DD".
  private func isYesterday(prev : Text, curr : Text) : Bool {
    let prevDays = dateToEpochDays(prev);
    let currDays = dateToEpochDays(curr);
    switch (prevDays, currDays) {
      case (?p, ?c) c == p + 1;
      case _ false;
    };
  };

  /// Parse "YYYY-MM-DD" into days-since-epoch (Int). Returns null on parse failure.
  private func dateToEpochDays(date : Text) : ?Int {
    // split on '-'
    let parts = date.split(#char '-').toArray();
    if (parts.size() != 3) return null;
    switch (Nat.fromText(parts[0]), Nat.fromText(parts[1]), Nat.fromText(parts[2])) {
      case (?y, ?m, ?d) {
        // Days from civil date (y, m, d) to Unix epoch
        // Algorithm: http://howardhinnant.github.io/date_algorithms.html
        let yi : Int = y;
        let mi : Int = m;
        let di : Int = d;
        let yr : Int = if (mi <= 2) yi - 1 else yi;
        let era : Int = (if (yr >= 0) yr else yr - 399) / 400;
        let yoe : Int = yr - era * 400;
        let doy : Int = (153 * (if (mi > 2) mi - 3 else mi + 9) + 2) / 5 + di - 1;
        let doe : Int = yoe * 365 + yoe / 4 - yoe / 100 + doy;
        ?(era * 146097 + doe - 719468);
      };
      case _ null;
    };
  };
};
