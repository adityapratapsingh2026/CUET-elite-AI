module {
  public type UserId = Principal;
  public type Timestamp = Int; // nanoseconds from Time.now()

  public type Subject = {
    #English;
    #BusinessStudies;
    #Accounts;
    #Maths;
    #GeneralTest;
  };

  public type Difficulty = {
    #Easy;
    #Medium;
    #Hard;
  };

  public type Level = {
    #Beginner;
    #Amateur;
    #Scholar;
    #Expert;
    #Topper;
  };

  /// Mutable counter wrapper — allows mixins to increment shared counters.
  public type Counter = { var value : Nat };

  public func newCounter(initial : Nat) : Counter {
    { var value = initial };
  };
};
