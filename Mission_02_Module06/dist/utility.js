"use strict";
// Utility Types
Object.defineProperty(exports, "__esModule", { value: true });
const product = {
    id: 222,
    name: "Mouse",
    price: "20",
    stock: 100,
    color: "black",
};
const emptyObj = {};
const product1 = {
    id: 222,
    name: "Mouse",
    price: "20",
};
const productSummary = {
    id: 101,
    name: "Laptop",
    manufacturer: {
        name: "TechCorp",
        address: "456 Tech Ave",
    },
};
const productOmit = {
    name: "Laptop",
    price: 1500,
    manufacturer: {
        name: "TechCorp",
        address: "456 Tech Ave",
    },
};
console.log(productSummary);
console.log(productOmit);
const userProfilePick = {
    id: 1,
    name: "Bob",
    age: 30,
};
const userProfileOmit = {
    id: 1,
    name: "Bob",
    age: 30,
};
console.log(userProfilePick);
console.log(userProfileOmit);
const userProfile = {
    id: 1,
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Wonderland",
        zipCode: "12345",
    },
};
// ? const nameChange = userProfile["name"];
// ? nameChange = "Redwan"; // Error: Cannot assign to 'name' because it is a read-only property.
console.log(userProfile);
const updatedProfile = {
    ...userProfile,
    name: "Redwan",
};
console.log(updatedProfile);
//# sourceMappingURL=utility.js.map