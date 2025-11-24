// nullable type
const getUser = (input: string | null) => {
  if (input) {
    console.log(`FROM DB ${input}`);
  } else {
    console.log(`FROM DB ALL USER`);
  }
};

getUser(null);

// unknown type
const discountedCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountedPrice = input * 0.1;
    console.log(discountedPrice);
  } else if (typeof input === "string") {
    const [discountedPrice] = input.split(" ");
    console.log(Number(discountedPrice) * 0.1);
  } else {
    console.log("wrong input");
  }
};

discountedCalculator(100);
discountedCalculator("100 tk");
discountedCalculator(null);

// void

const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error...");
