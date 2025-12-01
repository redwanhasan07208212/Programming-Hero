"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "Hasan";
const KGTOGMConverter = (input) => {
    if (typeof input === "number") {
        const converter = input * 1000;
        return `Return input is number and converted gm to ${converter}`;
    }
    else if (typeof input === "string") {
        const [converter] = input.split(" ");
        return `Return input is string and converted gm to ${Number(converter) * 1000}`;
    }
    else {
        return undefined;
    }
};
const result1 = KGTOGMConverter(4);
console.log(result1);
const result2 = KGTOGMConverter("78 kg");
console.log(result2);
try {
}
catch (err) {
    console.log(err.message);
}
//# sourceMappingURL=typeAssertionPractice.js.map