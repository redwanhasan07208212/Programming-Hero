//! Generate even numbers between 2 and 10
const evenNumbers = Array.from({ length: 5 }, (_, i) => (i + 1) * 2);
console.log(evenNumbers);

//! Create an array of random numbers (length 5) between 1–100
const randomNumbers = Array.from({ length: 5 }, (_, i) =>
  Math.ceil(Math.random() * 100)
);
console.log(randomNumbers);

//! 👉 ['R', 'e', 'd', 'w', 'a', 'n']
const text = "Redwan";
const charArray = Array.from(text);
console.log(charArray);

//! Simulate dice rolls

// 👉 Generate an array of 10 random dice rolls (1–6)

const diceRolls = Array.from({ length: 10 }, () =>
  Math.ceil(Math.random() * 6)
);
console.log(diceRolls);
