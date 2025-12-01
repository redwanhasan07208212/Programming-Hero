// ? spread and rest operator

/**********************************************
 // ??? Type: Spread Operator
**********************************************/
const friends: string[] = ["Supti", "Effat", "MySis", "MyMother"];
const clgFriends: string[] = ["chintu", "bablu", "soblu"];

const mergeFriends = [...friends, ...clgFriends];
console.log(mergeFriends);

// or we can do like that

friends.push(...clgFriends);
console.log(friends);

// object spread

const user: {
  name: string;
  phoneNo: string;
} = {
  name: "Redwan",
  phoneNo: "01568283360",
};
const otherInfo: {
  hobby: string;
  favoriteColor: string;
} = {
  hobby: "Too see the world with my wife",
  favoriteColor: "White",
};

const userInfo = { ...user, ...otherInfo };
console.log(userInfo);

/**********************************************
 // ??? Type: Rest Operator
**********************************************/

const otherInvite = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Send Invitation to ${friend}`);
  });
};
otherInvite("Redwan", "Hasan", "Siam");
