//? Count subtotal

const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

const subtotal = cartItems.reduce((subtotal, product) => {
  console.log(subtotal, product);
  return subtotal + product.price * product.quantity;
}, 0);

console.log("Subtotal:", subtotal);

//? Find best scorer
const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestScorer = players.reduce((bestPlayer, player) => {
  console.log(bestPlayer, player);
  if (bestPlayer.score > player.score) {
    return bestPlayer;
  }

  return player;
}, players[0]);

console.log(bestScorer);

//?  sum array
const numbers = [5, 10, 15, 20];

console.log(numbers.reduce((acc, sum) => acc + sum, 0));

//?  max number in array
const nums = [10, 25, 3, 47, 5];

const maxNumber = nums.reduce((max, num) => {
  if (max > num) {
    return max;
  }
  return num;
}, nums[0]);
console.log(maxNumber);

//? Count total characters
//! 👉 Find total number of characters in all words combined
//! Output: 16
const words = ["hello", "world", "reduce"];

const countTotalChars = words.reduce((total, word) => {
  return total + word.length;
}, 0);
console.log(countTotalChars);

//! Count occurrences

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});

console.log(fruitCount);
