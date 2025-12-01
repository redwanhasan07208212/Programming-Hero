"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// nullable type
const getUser = (input) => {
    if (input) {
        console.log(`FROM DB ${input}`);
    }
    else {
        console.log(`FROM DB ALL USER`);
    }
};
getUser(null);
// unknown type
const discountedCalculator = (input) => {
    if (typeof input === "number") {
        const discountedPrice = input * 0.1;
        console.log(discountedPrice);
    }
    else if (typeof input === "string") {
        const [discountedPrice] = input.split(" ");
        console.log(Number(discountedPrice) * 0.1);
    }
    else {
        console.log("wrong input");
    }
};
discountedCalculator(100);
discountedCalculator("100 tk");
discountedCalculator(null);
// void
const throwError = (msg) => {
    throw new Error(msg);
};
throwError("Error...");
//# sourceMappingURL=nullable_unknown_neverType.js.map