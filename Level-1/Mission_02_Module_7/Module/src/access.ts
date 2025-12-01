{
  class BankAccount {
    id: number;
    name: string;
    protected balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    addDeposit(amount:number){
        if(amount > 0){
          this.balance += amount;
          console.log(`Deposit of ${amount} added successfully. New balance is ${this.balance}`);
        } else {
          console.log("Invalid deposit amount.");
        }
    }
  }
  class StudentAccount  extends BankAccount {
    test(){
        this.balance = 1000;// property balance is private and only accessible with BankAccount
        console.log("This is a test method.");
    }
  }
 
  const account1 = new BankAccount(1, "Redwan", 5000);
  account1.addDeposit(1000);
  const studentAccount = new StudentAccount(2, "Hasan", 5000);
  studentAccount.test();
}

