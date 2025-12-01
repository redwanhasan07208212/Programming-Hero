// ? : ternary operator : decision making
// ?? : nullish coalescing operator : null/undefined
// ?. optional chaining

// This is ternary operator
const forMarriageAuthentication = (age: number) => {
  const checkEligible = age >= 21 ? "You are Eligible" : "You are not Eligible";
  console.log(checkEligible);
};
forMarriageAuthentication(20);

// Nullish coalescing
const userTheme = null;
const selectedTheme = userTheme ?? "Light Theme";
console.log(selectedTheme);

const isAuthenticated = "";
const resultWithTernary = isAuthenticated ? isAuthenticated : "You are Guest";
const resultWithNullish = isAuthenticated ?? "You are Guest";
console.log({ resultWithTernary }, { resultWithNullish });

// Optional Chaining
const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Khilgoan",
  },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);
