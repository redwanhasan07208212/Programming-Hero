"use strict";
// mapped types
Object.defineProperty(exports, "__esModule", { value: true });
// map
const arrayOfNum = [1, 4, 6];
const arrayOfString = ["1", "4", "6"];
const arrayOfStringUsingMap = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);
/*

T >>>   { height: string; width: number }
  
{  height: string; width: number }['height']: number

*/
//"height" |"width"
const area1 = {
    height: "50",
    width: false,
};
const user = {
    id: 1,
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Wonderland",
        zipCode: "12345",
    },
};
//# sourceMappingURL=mapped.js.map