type user = {
  name: string;
  age: number;
};
type role = {
  role: "admin" | "user";
};
type userWithRole = user & role;

interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}
const user1: userWithRole = {
  name: "Redwan",
  age: 24,
  role: "admin",
};

const user2: IUserWithRole = {
  name: "Hasan",
  age: 45,
  role: "user",
};

type IsAdmin = boolean;

const isAdmin: IsAdmin = false;

// function
type Add = (num1: number, num2: number) => number;
interface IAdd {
  (num1: number, num2: number): number;
}
const isAdd: Add = (number1, number2) => {
  return number1 + number2;
};

const idAdd2: IAdd = (num1, num2) => {
  return num1 + num2;
};

type Friends = string[];
interface IFriends {
  [index: number]: string;
}
const friends: Friends = ["A", "B", "C"];
const friends2: IFriends = ["D", "E", "F"];
console.log(user1, user2, friends, friends2);
