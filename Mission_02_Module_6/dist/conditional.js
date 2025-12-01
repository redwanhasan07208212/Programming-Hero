"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isRichVehicle = (vehicle) => {
    const richVehicles = {
        bike: "Ducati",
        car: "BMW",
        ship: "Yacht",
    };
    for (const key in vehicle) {
        if (!(key in richVehicles)) {
            return false;
        }
    }
    return true;
};
console.log(isRichVehicle({ bike: "Ducati", car: "BMW" })); // true
console.log(isRichVehicle({ bike: "Ducati", plane: "Boeing" })); // false
//# sourceMappingURL=conditional.js.map