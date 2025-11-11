{
  // function

  //There are two types of functions 1. Normal Functions 2 . Arrow Fuctions

  function add(num1: number, num2: number = 45): number {
    //we can also use default value
    return num1 + num2;
  }
  console.log(add(4, 5));

  const multiply = (a: number, b: number) => {
    return a * b;
  };

  // if there any functions declare in objects then it will call the methods.
  // object --> function --> method

  const poorUser = {
    name: "Redwan",
    balance: 0,
    newBalance(balance: number): string {
      return `My new balance is ${this.balance + balance}`;
    },
  };

  const rollElement: number[] = [4, 5, 7];
  const square = rollElement.map((ele: number): number => ele * ele);
  console.log(square);
  console.log(poorUser.newBalance(100));
}
