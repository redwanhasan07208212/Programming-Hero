//? Some = that mean this is interested in some elements not all elements
const numbers = [1, 3, 5];

const hasEvenNumber = numbers.some((num) => num % 2 === 0);
//console.log(hasEvenNumber); //* Output: false

const currentUserRoles = ["user", "editor", "admin"];

const featureAccessRoles = ["admin", "manager"];

const canAccess = currentUserRoles.some((role) =>
  featureAccessRoles.includes(role)
);
//console.log(canAccess); //* Output: false

//? Array From()

const arr = Array.from({ length: 5 }, (_, i) => i); //* here i for index and _ for value which is undefined
const arr2 = Array.from({ length: 5 }).fill(0); //* fill all with 0
const arr3 = Array.from({ length: 5 }, () => Math.ceil(Math.random() * 100)); //* fill with random number
const arr4 = Array.from({ length: 5 }, (_, i) => (i + 1) * 2); //* fill with even numbers
const arr5 = Array.from(["red", "green", "blue"], (color) =>
  color.toUpperCase()
); //* fill with uppercase colors
const arr6 = Array.from([2, 4, 6], (value) => value * value); //* fill with square of numbers

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);

const range = (start, stop, step) =>
  Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => {
    // console.log(i);
    start + i * step;
  });
//console.log(range(1, 10, 2)); //* Output: [1, 3, 5, 7, 9]
