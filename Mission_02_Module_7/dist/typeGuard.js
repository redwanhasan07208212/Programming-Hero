"use strict";
// ============================================
// TYPE GUARD - PROBLEM STATEMENT & EXERCISES
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
const add = (num1, num2) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
};
// Test cases
console.log(add(2, 2)); // 4
console.log(add(2, "2")); // "22"
console.log(add("2", 2)); // "22"
console.log(add("2", "2")); // "22"
const getUserInfo = (user) => {
    if ("role" in user) {
        console.log(`${user.name} and his role is: ${user.role}`);
    }
    else {
        console.log(`${user.name} is a normal user`);
    }
};
// Test cases
getUserInfo({ name: "Redwan", role: "Admin" });
getUserInfo({ name: "John" });
// ============================================
// PROBLEM 3: instanceof Type Guard
// ============================================
/*
PROBLEM STATEMENT:
You're building a transportation system that handles different vehicle types.
Create classes for Car and Bike, and a function that:
- Takes a Vehicle (Car or Bike)
- If it's a Car, call its drive() method
- If it's a Bike, call its ride() method
- Use instanceof to determine the vehicle type
*/
class Car {
    drive() {
        console.log("Driving the car 🚗");
    }
    openSunroof() {
        console.log("Opening the sunroof ☀️");
    }
}
class Bike {
    ride() {
        console.log("Riding the bike 🚴");
    }
    doWheelie() {
        console.log("Doing a wheelie! 🤸");
    }
}
const operateVehicle = (vehicle) => {
    if (vehicle instanceof Car) {
        vehicle.drive();
        vehicle.openSunroof();
    }
    else if (vehicle instanceof Bike) {
        vehicle.ride();
        vehicle.doWheelie();
    }
};
// Test cases
const myCar = new Car();
const myBike = new Bike();
operateVehicle(myCar);
operateVehicle(myBike);
// Custom type guard function
const isDog = (animal) => {
    return animal.bark !== undefined;
};
const makeSound = (animal) => {
    if (isDog(animal)) {
        animal.bark(); // TypeScript knows it's a Dog
    }
    else {
        animal.meow(); // TypeScript knows it's a Cat
    }
};
// Test cases
const myDog = {
    name: "Buddy",
    bark: () => console.log("Woof! 🐕"),
};
const myCat = {
    name: "Whiskers",
    meow: () => console.log("Meow! 🐈"),
};
makeSound(myDog);
makeSound(myCat);
const processPayment = (payment) => {
    if (payment.type === "credit") {
        console.log(`Processing credit card payment: ${payment.cardNumber}`);
    }
    else if (payment.type === "paypal") {
        console.log(`Processing PayPal payment for: ${payment.email}`);
    }
    else if (payment.type === "cash") {
        console.log(`Processing cash payment: $${payment.amount}`);
    }
};
// Test cases
processPayment({
    type: "credit",
    cardNumber: "1234-5678-9012-3456",
    cvv: "123",
});
processPayment({ type: "paypal", email: "user@example.com" });
processPayment({ type: "cash", amount: 100 });
const calculateArea = (shape) => {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    else if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
    else if (shape.kind === "triangle") {
        return 0.5 * shape.base * shape.height;
    }
    return 0;
};
// Test cases
console.log(calculateArea({ kind: "circle", radius: 5 })); // Circle area
console.log(calculateArea({ kind: "rectangle", width: 4, height: 6 })); // Rectangle area
console.log(calculateArea({ kind: "triangle", base: 4, height: 5 })); // Triangle area
const handleApiResponse = (response) => {
    if (response.status === "success") {
        console.log("Data:", response.data);
    }
    else if (response.status === "error") {
        console.log(`Error: ${response.message}`);
    }
    else if (response.status === "loading") {
        console.log("Loading...");
    }
};
// Test cases
handleApiResponse({ status: "success", data: { id: 1, name: "Test" } });
handleApiResponse({ status: "error", message: "Something went wrong" });
handleApiResponse({ status: "loading" });
const isManager = (employee) => {
    return employee.reports !== undefined;
};
const displayEmployeeInfo = (employee) => {
    if (isManager(employee)) {
        console.log(`Manager: ${employee.name}, Department: ${employee.department}, Reports: ${employee.reports}`);
    }
    else if (employee.language !== undefined) {
        const dev = employee;
        console.log(`Developer: ${dev.name}, Language: ${dev.language}, Experience: ${dev.experience} years`);
    }
    else {
        const intern = employee;
        console.log(`Intern: ${intern.name}, School: ${intern.school}, Mentor: ${intern.mentor}`);
    }
};
// Test cases
displayEmployeeInfo({
    name: "Alice",
    department: "HR",
    reports: 5,
});
displayEmployeeInfo({
    name: "Bob",
    language: "TypeScript",
    experience: 3,
});
displayEmployeeInfo({
    name: "Charlie",
    school: "XYZ University",
    mentor: "Alice",
});
const validateField = (field) => {
    if (field.type === "text") {
        return field.value.length >= field.minLength;
    }
    else if (field.type === "number") {
        return field.value >= field.min && field.value <= field.max;
    }
    else if (field.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(field.value);
    }
    return false;
};
// Test cases
console.log(validateField({ type: "text", value: "Hello", minLength: 3 })); // true
console.log(validateField({ type: "number", value: 10, min: 5, max: 15 })); // true
console.log(validateField({ type: "email", value: "redwanhasancse@gmail.com" }));
// ============================================
// KEY TAKEAWAYS
// ============================================
/*
1. typeof - Best for primitive types (string, number, boolean, symbol)
2. in - Best for checking if a property exists in an object
3. instanceof - Best for class instances and constructor functions
4. Custom type predicates - Best for complex type checking logic
5. Discriminated unions - Best when types share a common property (like 'type' or 'kind')

WHEN TO USE EACH:
- Use typeof for basic type checking with primitives
- Use in when checking for optional properties or discriminating unions
- Use instanceof when working with classes and inheritance
- Use custom type predicates when logic is complex or reusable
- Use discriminated unions for cleaner, more maintainable code

BENEFITS:
✓ Better type safety at runtime
✓ Enhanced IntelliSense and autocomplete
✓ Prevents runtime errors
✓ Makes code more maintainable
✓ Improves code documentation
*/
//# sourceMappingURL=typeGuard.js.map