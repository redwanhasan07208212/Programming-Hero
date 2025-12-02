// Problem: You have a function that accepts a parameter which can be either a string or a number.
// Your task is to create a type guard to check the type of the input and perform the following operations:
// - If the input is a number, multiply it by 2 and return the result.
// - If the input is a string, return the string in uppercase.

type StringOrNumber = string | number;

function processInput(input: StringOrNumber): string | number {
  // Add your type guard and implementation here
  return input;
}

// Example Usage:
console.log(processInput(10)); // Expected output: 20
console.log(processInput("hello")); // Expected output: "HELLO"
