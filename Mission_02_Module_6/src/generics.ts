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

// You'd need separate functions for each type
function getFirstString(arr: string[]): string {
  return arr[0]!;
}

function getFirstNumber(arr: number[]): number {
  return arr[0]!;
}

function getFirst<T>(arr: T[]): T {
  return arr[0]!;
}

// Works with any type!
const firstString = getFirst(["a", "b", "c"]); // string
const firstNumber = getFirst([1, 2, 3]); // number

// Generic function with type inference
function identity<T>(value: T): T {
  return value;
}

const num = identity(42); // T is inferred as number
const str = identity("hello"); // T is inferred as string

// Generic function with array operations
function wrapInArray<T>(value: T): T[] {
  return [value];
}

wrapInArray(5); // number[]
wrapInArray("hi"); // string[]
console.log(
  users,
  coordinates1,
  coordinates2,
  firstString,
  firstNumber,
  num,
  str
);
