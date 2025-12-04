class BankAccount {
  constructor(
    public readonly userId: string,
    public userName: string,
    protected userBalance: number
  ) {}

  addBalance(amount: number) {
    this.userBalance += amount;
  }
}

class StudentAccount extends BankAccount {
  constructor(
    userId: string,
    userName: string,
    userBalance: number,
    public studentId: string
  ) {
    super(userId, userName, userBalance);
  }
  studentBalance(amount: number) {
    this.userBalance += amount; // * protected member accessed within subclass but we cannot access it outside the class or subclass also private member cannot be accessed outside the class
  }
}

const student1 = new StudentAccount("U123", "Alice", 1000, "S456");
student1.addBalance(500);
console.log(student1);
