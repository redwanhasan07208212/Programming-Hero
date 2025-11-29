"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle1 = {
    name: "BMW",
    model: "X5",
    price: 80000,
};
const vehicle2 = "name";
console.log(vehicle1, vehicle2);
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
const product = {
    id: 101,
    name: "Laptop",
    price: 1500,
    manufacturer: {
        name: "TechCorp",
        address: "456 Tech Ave",
    },
};
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
console.log(getPropertyFromObj(user, "address"));
console.log(getPropertyFromObj(product, "manufacturer"));
//# sourceMappingURL=keyOfConstraint.js.map