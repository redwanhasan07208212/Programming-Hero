// dynamically generalize types
type GenericType<T> = Array<T>;

const friends: GenericType<string> = ["Redwan", "Hasan", "Siam", "Mezba"];
const friend: Array<string> = ["A", "B", "C"];
const rollNumbers: GenericType<number> = [1, 2, 3, 4, 5];
const rollNumber: Array<number> = [11, 22, 33, 44, 55];
const isAdmin: GenericType<boolean> = [true, false, false, true];
const isEligible: Array<boolean> = [false, true, true, false];
console.log(friends, rollNumbers, isAdmin);

type User = {
  name: string;
  age: number;
};
const users: GenericType<User> = [
  {
    name: "Redwan",
    age: 24,
  },
  {
    name: "Hasan",
    age: 45,
  },
];

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];
