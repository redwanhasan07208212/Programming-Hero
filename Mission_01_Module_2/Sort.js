//? Sort
const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "Orange", "apple", "cherry"];

const sortedNumbers = numbers.sort((a, b) => b - a); //* This sort method mutates the original array
const sortedFruits = fruits.sort((a, b) => a.localeCompare(b)); //* This sort method mutates the original array

//* console.log("Sorted Numbers:", numbers);
//* console.log("Sorted Fruits:", fruits);

//?  Array Flat

const nestedArrays = [
  [1, 2, 3],
  [4, 5, [3, 4, 5]],
  [6, 7, 8, 9, [10, 11, 12], [13, 14]],
];

const flatArray = nestedArrays.flat(Infinity).sort((a, b) => a - b);
console.log("Flat Array:", flatArray);

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const allTagsFlat = [...new Set(tagsFromPosts.flat(Infinity))];
console.log(allTagsFlat);

const currentUserRoles = ["user", "editor"];
const featureAccessRoles = ["admin", "manager"];
