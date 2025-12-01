"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const friends = ["Redwan", "Hasan", "Siam", "Mezba"];
const friend = ["A", "B", "C"];
const rollNumbers = [1, 2, 3, 4, 5];
const rollNumber = [11, 22, 33, 44, 55];
const isAdmin = [true, false, false, true];
const isEligible = [false, true, true, false];
console.log(friends, rollNumbers, isAdmin);
const users = [
    {
        name: "Redwan",
        age: 24,
    },
    {
        name: "Hasan",
        age: 45,
    },
];
const coordinates1 = [20, 30];
const coordinates2 = ["20", "30"];
// You'd need separate functions for each type
function getFirstString(arr) {
    return arr[0];
}
function getFirstNumber(arr) {
    return arr[0];
}
function getFirst(arr) {
    return arr[0];
}
// Works with any type!
const firstString = getFirst(["a", "b", "c"]); // string
const firstNumber = getFirst([1, 2, 3]); // number
// Generic function with type inference
function identity(value) {
    return value;
}
const num = identity(42); // T is inferred as number
const str = identity("hello"); // T is inferred as string
// Generic function with array operations
function wrapInArray(value) {
    return [value];
}
wrapInArray(5); // number[]
wrapInArray("hi"); // string[]
console.log(users, coordinates1, coordinates2, firstString, firstNumber, num, str);
//# sourceMappingURL=generics.js.map