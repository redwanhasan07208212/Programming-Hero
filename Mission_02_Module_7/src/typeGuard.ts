// ============================================
// TYPE GUARD - PROBLEM STATEMENT & EXERCISES
// ============================================

/*
WHAT ARE TYPE GUARDS?

Type Guards are techniques used in TypeScript to narrow down the type of a variable 
within a conditional block. They help TypeScript understand what type a variable is 
at runtime, providing better type safety and IntelliSense support.

COMMON TYPE GUARD TECHNIQUES:
1. typeof - for primitive types (string, number, boolean, etc.)
2. in - for checking property existence
3. instanceof - for class instances
4. Custom type predicates - user-defined type guards
*/

// ============================================
// PROBLEM 1: typeof Type Guard
// ============================================

/*
PROBLEM STATEMENT:
You're building a calculator that can handle both numbers and numeric strings.
Create a function that:
- Accepts two parameters that can be either number or string
- If both are numbers, return their sum
- If any is a string, concatenate them as strings
- Return type should be number | string
*/

type Alphanumeric = number | string;

const add = (num1: Alphanumeric, num2: Alphanumeric): Alphanumeric => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

// Test cases
console.log(add(2, 2)); // 4
console.log(add(2, "2")); // "22"
console.log(add("2", 2)); // "22"
console.log(add("2", "2")); // "22"

// ============================================
// PROBLEM 2: in Operator Type Guard
// ============================================

/*
PROBLEM STATEMENT:
You're building a user management system with different user types.
Create a function that:
- Takes a user object (either NormalUser or AdminUser)
- If user is an admin, display their name and role
- If user is normal, display their name only
- Use the 'in' operator to check for the 'role' property
*/

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser): void => {
  if ("role" in user) {
    console.log(`${user.name} and his role is: ${user.role}`);
  } else {
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
  drive(): void {
    console.log("Driving the car 🚗");
  }

  openSunroof(): void {
    console.log("Opening the sunroof ☀️");
  }
}

class Bike {
  ride(): void {
    console.log("Riding the bike 🚴");
  }

  doWheelie(): void {
    console.log("Doing a wheelie! 🤸");
  }
}

type Vehicle = Car | Bike;

const operateVehicle = (vehicle: Vehicle): void => {
  if (vehicle instanceof Car) {
    vehicle.drive();
    vehicle.openSunroof();
  } else if (vehicle instanceof Bike) {
    vehicle.ride();
    vehicle.doWheelie();
  }
};

// Test cases
const myCar = new Car();
const myBike = new Bike();
operateVehicle(myCar);
operateVehicle(myBike);

// ============================================
// PROBLEM 4: Custom Type Predicate
// ============================================

/**
 * PROBLEM STATEMENT:
 * You're building a pet store management system.
 * Create a custom type guard function that:
 * - Checks if an animal is a Dog (has bark method)
 * - Returns a type predicate (animal is Dog)
 * - Use this type guard in a function to make animals perform actions
 */

interface Cat {
  name: string;
  meow: () => void;
}

interface Dog {
  name: string;
  bark: () => void;
}

// Custom type guard function
const isDog = (animal: Cat | Dog): animal is Dog => {
  return (animal as Dog).bark !== undefined;
};

const makeSound = (animal: Cat | Dog): void => {
  if (isDog(animal)) {
    animal.bark(); // TypeScript knows it's a Dog
  } else {
    animal.meow(); // TypeScript knows it's a Cat
  }
};

// Test cases
const myDog: Dog = {
  name: "Buddy",
  bark: () => console.log("Woof! 🐕"),
};

const myCat: Cat = {
  name: "Whiskers",
  meow: () => console.log("Meow! 🐈"),
};

makeSound(myDog);
makeSound(myCat);

// ============================================
// PROBLEM 5: Complex Type Guard with Multiple Types
// ============================================

/*
PROBLEM STATEMENT:
You're building a payment processing system that accepts multiple payment methods.
Create a function that:
- Accepts CreditCard, PayPal, or Cash payment types
- Each payment type has different properties
- Process the payment based on the payment type
- Use appropriate type guards to handle each case
*/

type CreditCard = {
  type: "credit";
  cardNumber: string;
  cvv: string;
};

type PayPal = {
  type: "paypal";
  email: string;
};

type Cash = {
  type: "cash";
  amount: number;
};

type PaymentMethod = CreditCard | PayPal | Cash;

const processPayment = (payment: PaymentMethod): void => {
  if (payment.type === "credit") {
    console.log(`Processing credit card payment: ${payment.cardNumber}`);
  } else if (payment.type === "paypal") {
    console.log(`Processing PayPal payment for: ${payment.email}`);
  } else if (payment.type === "cash") {
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

// ============================================
// PRACTICE EXERCISES
// ============================================

/*
EXERCISE 1: Shape Calculator
Create a function that calculates area for different shapes:
- Circle: { kind: "circle", radius: number }
- Rectangle: { kind: "rectangle", width: number, height: number }
- Triangle: { kind: "triangle", base: number, height: number }
Use type guards to handle each shape appropriately.
*/

// TODO: Implement your solution here

type Circle = {
  kind: "circle";
  radius: number;
};
type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};
type Triangle = {
  kind: "triangle";
  base: number;
  height: number;
};

type Shape = Circle | Rectangle | Triangle;

const calculateArea = (shape: Shape): number => {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  } else if (shape.kind === "triangle") {
    return 0.5 * shape.base * shape.height;
  }
  return 0;
};

// Test cases
console.log(calculateArea({ kind: "circle", radius: 5 })); // Circle area
console.log(calculateArea({ kind: "rectangle", width: 4, height: 6 })); // Rectangle area
console.log(calculateArea({ kind: "triangle", base: 4, height: 5 })); // Triangle area

/*
EXERCISE 2: API Response Handler
Create a type guard system for API responses:
- SuccessResponse: { status: "success", data: any }
- ErrorResponse: { status: "error", message: string }
- LoadingResponse: { status: "loading" }
Create a function that handles each response type differently.
*/

// TODO: Implement your solution here

type SuccessResponse = {
  status: "success";
  data: any;
};
type ErrorResponse = {
  status: "error";
  message: string;
};
type LoadingResponse = {
  status: "loading";
};

type ApiResponse = SuccessResponse | ErrorResponse | LoadingResponse;

const handleApiResponse = (response: ApiResponse): void => {
  if (response.status === "success") {
    console.log("Data:", response.data);
  } else if (response.status === "error") {
    console.log(`Error: ${response.message}`);
  } else if (response.status === "loading") {
    console.log("Loading...");
  }
};
// Test cases
handleApiResponse({ status: "success", data: { id: 1, name: "Test" } });
handleApiResponse({ status: "error", message: "Something went wrong" });
handleApiResponse({ status: "loading" });

/*
EXERCISE 3: Employee Management
Create a system with three employee types:
- Manager: { name: string, department: string, reports: number }
- Developer: { name: string, language: string, experience: number }
- Intern: { name: string, school: string, mentor: string }
Create a function that displays appropriate information for each employee type.
Use custom type predicates for at least one check.
*/

// TODO: Implement your solution here
type Manager = {
  name: string;
  department: string;
  reports: number;
};
type Developer = {
  name: string;
  language: string;
  experience: number;
};
type Intern = {
  name: string;
  school: string;
  mentor: string;
};

type Employee = Manager | Developer | Intern;

const isManager = (employee: Employee): employee is Manager => {
  return (employee as Manager).reports !== undefined;
};

const displayEmployeeInfo = (employee: Employee): void => {
  if (isManager(employee)) {
    console.log(
      `Manager: ${employee.name}, Department: ${employee.department}, Reports: ${employee.reports}`
    );
  } else if ((employee as Developer).language !== undefined) {
    const dev = employee as Developer;
    console.log(
      `Developer: ${dev.name}, Language: ${dev.language}, Experience: ${dev.experience} years`
    );
  } else {
    const intern = employee as Intern;
    console.log(
      `Intern: ${intern.name}, School: ${intern.school}, Mentor: ${intern.mentor}`
    );
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

/*
EXERCISE 4: Smart Form Validator
Create a form field validator that handles:
- TextField: { type: "text", value: string, minLength: number }
- NumberField: { type: "number", value: number, min: number, max: number }
- EmailField: { type: "email", value: string }
Each field type has different validation rules. Use type guards to validate correctly.
*/

// TODO: Implement your solution here

type TextField = {
  type: "text";
  value: string;
  minLength: number;
};
type NumberField = {
  type: "number";
  value: number;
  min: number;
  max: number;
};
type EmailField = {
  type: "email";
  value: string;
};

type FormField = TextField | NumberField | EmailField;

const validateField = (field: FormField): boolean => {
  if (field.type === "text") {
    return field.value.length >= field.minLength;
  } else if (field.type === "number") {
    return field.value >= field.min && field.value <= field.max;
  } else if (field.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(field.value);
  }
  return false;
};

// Test cases
console.log(validateField({ type: "text", value: "Hello", minLength: 3 })); // true
console.log(validateField({ type: "number", value: 10, min: 5, max: 15 })); // true
console.log(
  validateField({ type: "email", value: "redwanhasancse@gmail.com" })
);

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
