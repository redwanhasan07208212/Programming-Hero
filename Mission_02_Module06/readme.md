What Are Generics?
Generics allow you to create reusable, type-safe components that can work with multiple types rather than a single one. They're like "type variables" that let you write flexible code while maintaining TypeScript's type safety.

Why Use Generics?
Without Generics:

With Generics:

function getFirst<T>(arr: T[]): T {
return arr[0];
}

// Works with any type!
const firstString = getFirst(["a", "b", "c"]); // string
const firstNumber = getFirst([1, 2, 3]); // number

Your Code Explained

1. Generic Type Alias:

type GenericType<T> = Array<T>;

T is a type parameter (placeholder for any type)
When you use GenericType<string>, T becomes string
This creates reusable type definitions 2. Multiple Type Parameters:

type Coordinates<X, Y> = [X, Y];
const coordinates1: Coordinates<number, number> = [20, 30];

You can use multiple generic parameters
Each parameter can be a different type
More Generic Patterns
Generic Functions
// Generic function with type inference
function identity<T>(value: T): T {
return value;
}

const num = identity(42); // T is inferred as number
const str = identity("hello"); // T is inferred as string

// Generic function with array operations
function wrapInArray<T>(value: T): T[] {
return [value];
}

wrapInArray(5); // number[]
wrapInArray("hi"); // string[]

Generic Interfaces
interface Box<T> {
content: T;
}

const stringBox: Box<string> = { content: "hello" };
const numberBox: Box<number> = { content: 42 };

// Generic interface with methods
interface Repository<T> {
items: T[];
add(item: T): void;
getById(id: number): T | undefined;
}

Generic Constraints
// Constrain T to have a 'length' property
interface HasLength {
length: number;
}

function logLength<T extends HasLength>(item: T): void {
console.log(item.length);
}

logLength("hello"); // ✓ strings have length
logLength([1, 2, 3]); // ✓ arrays have length
logLength({ length: 10 }); // ✓ objects with length work
// logLength(42); // ✗ Error: number doesn't have length

// Constrain to specific type properties
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
return obj[key];
}

const person = { name: "Redwan", age: 24 };
getProperty(person, "name"); // ✓ "Redwan"
getProperty(person, "age"); // ✓ 24
// getProperty(person, "invalid"); // ✗ Error

Generic Classes
class Stack<T> {
private items: T[] = [];

push(item: T): void {
this.items.push(item);
}

pop(): T | undefined {
return this.items.pop();
}

peek(): T | undefined {
return this.items[this.items.length - 1];
}
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);

const stringStack = new Stack<string>();
stringStack.push("hello");

Default Generic Types
interface Response<T = string> {
data: T;
status: number;
}

const response1: Response = { data: "hello", status: 200 }; // T defaults to string
const response2: Response<number> = { data: 42, status: 200 }; // T is number

Real-World Examples
API Response Handler
interface ApiResponse<T> {
data: T;
error: string | null;
loading: boolean;
}

function fetchData<T>(url: string): Promise<ApiResponse<T>> {
// Implementation
return fetch(url)
.then(res => res.json())
.then(data => ({
data: data as T,
error: null,
loading: false
}));
}

// Usage
interface User {
id: number;
name: string;
}

const userResponse = await fetchData<User>("/api/user");
// userResponse.data is typed as User

Utility Function
function filterByProperty<T, K extends keyof T>(
array: T[],
property: K,
value: T[K]
): T[] {
return array.filter(item => item[property] === value);
}

const users = [
{ name: "Redwan", age: 24 },
{ name: "Hasan", age: 45 },
{ name: "Siam", age: 24 }
];

const age24Users = filterByProperty(users, "age", 24);
// Returns users with age 24

Key Benefits
Type Safety: Catch errors at compile time
Reusability: Write once, use with many types
Flexibility: Work with unknown types while maintaining type information
Better IDE Support: Get autocomplete and type hints
Self-Documenting: The type parameters make the code's intent clear
Common Use Cases
Collections (Arrays, Maps, Sets)
API response handlers
Data structures (Stack, Queue, LinkedList)
Form handlers
Database repositories
Promise/async operations
React components (props, state)
Generics are one of TypeScript's most powerful features, enabling you to write flexible, reusable, and type-safe code!
