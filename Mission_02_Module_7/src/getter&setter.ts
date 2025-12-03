class BankAccount {
  constructor(
    public readonly userId: string,
    public userName: string,
    private userBalance: number
  ) {}

  get balance(): number {
    return this.userBalance;
  }

  set balance(amount: number) {
    if (amount < 0) {
      console.log("Balance cannot be negative.");
    } else {
      this.userBalance += amount;
    }
  }
}
const account1 = new BankAccount("U123", "Alice", 1000);
console.log(account1.balance); // Getter usage

account1.balance = 500; // Setter usage to add balance
console.log(account1);

account1.balance = -200; // Attempt to set negative balance
console.log(account1);
