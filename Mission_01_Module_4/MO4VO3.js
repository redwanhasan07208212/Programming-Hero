// Problem Statement

// Given a string s containing just the characters "(", ")", "{", "}", "[" and "]",
// determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

//? Input and Output
//? "()[]{}" -> true
//? "([{}])" -> true
//? "(]" -> false
//? "(()" -> false
import Stack from "../Mission_01_Module_3/M03V03.js";
const bracketChecker = (str) => {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element === "(" || element === "{" || element === "[") {
      stack.push(element);
    } else if (element === ")" || element === "}" || element === "]") {
      if (stack.isEmpty() || stack.pop()) {
        return false;
      }
    }
  }
  return true;
};
console.log(bracketChecker("([{}])"));
