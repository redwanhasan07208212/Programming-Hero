"use strict";
// ? spread and rest operator
Object.defineProperty(exports, "__esModule", { value: true });
/**********************************************
 // ??? Type: Spread Operator
**********************************************/
const friends = ["Supti", "Effat", "MySis", "MyMother"];
const clgFriends = ["chintu", "bablu", "soblu"];
const mergeFriends = [...friends, ...clgFriends];
console.log(mergeFriends);
// or we can do like that
friends.push(...clgFriends);
console.log(friends);
// object spread
const user = {
    name: "Redwan",
    phoneNo: "01568283360",
};
const otherInfo = {
    hobby: "Too see the world with my wife",
    favoriteColor: "White",
};
const userInfo = { ...user, ...otherInfo };
console.log(userInfo);
/**********************************************
 // ??? Type: Rest Operator
**********************************************/
const otherInvite = (...friends) => {
    friends.forEach((friend) => {
        console.log(`Send Invitation to ${friend}`);
    });
};
otherInvite("Redwan", "Hasan", "Siam");
//# sourceMappingURL=spreadAndRest.js.map