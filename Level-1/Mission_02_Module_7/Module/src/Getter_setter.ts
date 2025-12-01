{
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    private balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    // getter and setter for balance property

    //  public  addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    //   }

    set addDeposit(amount: number) {
      this.balance += amount; // set have always minimum one parameter
    }

    //  public getBalance() {
    //     return this._balance;
    //   }

    get Balance() {
      return this.balance; // get have not any parameters .
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
  //goribManusherAccount._balance = 0; //// property balance is private and only accessible with BankAccount
  // goribManusherAccount.addDeposit(20); //function call korte hsse
  //const myBalance = goribManusherAccount.getBalance(); // function call korte hsse

  goribManusherAccount.addDeposit = 90;
  const myBalance = goribManusherAccount.Balance;
  console.log(myBalance);
}
