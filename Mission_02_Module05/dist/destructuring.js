"use strict";
/**********************************************
 // ??? Type: Object Destructuring
**********************************************/
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 123,
    name: {
        firstName: "Redwan",
        middleName: "Hasan",
        lastName: "Siam",
    },
    gender: "male",
    favoriteColor: "white",
};
const { favoriteColor, name: { firstName, middleName }, } = user;
console.log(firstName, middleName, favoriteColor);
/**********************************************
 // ??? Type: Array Destructuring
**********************************************/
const ara = ["Chintu", "Bablu", "Shiblu", "Montu", "Shontu"];
const [A, B, C] = ara;
console.log(A, B, C);
//# sourceMappingURL=destructuring.js.map