"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**********************************************
 // ??? Type: Function
 // ??? NORMAL FUNCTION
 **********************************************/
function addNormal(num1, num2) {
    return num1 + num2;
}
console.log(addNormal(45, 32));
/**********************************************
 // ??? Type: Function
 // ??? ARROW FUNCTION
 **********************************************/
const addArrow = (num1, num2) => {
    return num1 + num2;
};
console.log(addArrow(32, 8));
/**********************************************
 // ??? Type: Function
 // ??? OBJECT FUNCTION
 **********************************************/
const poorUser = {
    name: "Redwan",
    balance: 0,
    addBalance(value) {
        return this.balance + value;
    },
};
console.log(poorUser.addBalance(57));
console.log(poorUser);
/**********************************************
 // ??? Type: Function
 // ??? Loop FUNCTION
 **********************************************/
const arr = [2, 4, 6];
const squareNumber = arr.map((ele) => ele * ele);
console.log(squareNumber);
//# sourceMappingURL=function.js.map