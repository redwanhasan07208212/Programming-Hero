"use strict";
/**********************************************
 // ??? Type: Union
**********************************************/
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (user) => {
    if (user === "admin") {
        return "admin dashboard";
    }
    else if (user === "user") {
        return "user dashboard";
    }
    else {
        return "guest dashboard";
    }
};
console.log(getDashboard("guest"));
// cSpell:ignore Chowdhury Shaheb
const ChowdhuryShaheb = {
    id: "123",
    name: "Chowdhury Shaheb",
    phoneNo: "017",
    designation: "manager",
    teamSize: 20,
};
console.log(ChowdhuryShaheb);
//# sourceMappingURL=union&intersection.js.map