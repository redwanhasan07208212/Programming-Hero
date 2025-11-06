//!  👉 Check if there’s any negative number
const numbers = [5, 8, -3, 10];
const hasNegativeNumber = numbers.some((num) => num < 0);
console.log(hasNegativeNumber);

//!  👉 Return true if at least one username contains a digit
const usernames = ["alex", "john123", "maria"];
const hasUserNameWithDigit = usernames.some((userName) => /\d/.test(userName));
console.log(hasUserNameWithDigit);

//! 👉 Check if user has permission to access
const userRoles = ["user", "moderator"];
const allowedRoles = ["admin", "moderator"];
const hasAccess = userRoles.some((role) => allowedRoles.includes(role));
console.log(hasAccess);

//! 👉 Return true if any comment is empty
const comments = ["Nice!", "Great post!", ""];
const emptyComment = comments.some((comment) => comment.trim() === "");
console.log(emptyComment);

//! 👉 Check if any product is available
const products = [
  { name: "Laptop", inStock: false },
  { name: "Phone", inStock: true },
  { name: "Tablet", inStock: false },
];
const isProductAvailable = products.some((product) => product.inStock);
console.log(isProductAvailable); //* Output: true
