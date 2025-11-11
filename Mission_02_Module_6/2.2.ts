{
  // interface
  type User1 = {
    name: string;
    age: number;
  };

  type UsesWithRole1 = User1 & { role: string };
  const user1: UsesWithRole1 = {
    name: "John Doe",
    age: 30,
    role: "Developer",
  };

  interface User2 {
    name: string;
    age: number;
    role: string;
  }
  interface UserWithRole2 extends User2 {
    gender: string;
  }
  const user2: UserWithRole2 = {
    name: "Jane Doe",
    age: 28,
    role: "Software Engineer",
    gender: "Female",
  };

  //we know that the interface is implemented only in the objects .
  // interface objects ---> array-->object function---> object function

  /// array 
  type Roll1 = number[];
  interface Roll2 {
    [index: number] : number
  }
  const rollNumber1 : Roll2 = [1, 2, 3, 4, 5, 6, 7];


  /// function
  type Add = (num1:number,num2:number)=>number;
  interface Add1 {
    (num1:number,num2:number):number;
  }
  const add:Add1 = (num1,num2)=> num1+ num2 
}
