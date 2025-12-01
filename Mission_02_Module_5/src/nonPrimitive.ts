/**********************************************
 // ??? Reference Type: Array 
 // ??? Tuple
 **********************************************/
let bazarList: string[] = ["Tomato", "Chillies", "Orange"];

let mixedArr: (string | number)[] = ["Redwan", 1, "Hasan", 2];

let coOrdinates: [number, number] = [23, 45]; // this is tuple

const couple: [string, string] = ["Husband", "Wife"];
const destination: [string, string, string] = [
  "Dhaka",
  "Chittagong",
  "Rajshahi",
];

/**********************************************
 // ??? Reference Type: Object
 // ??? Object
 **********************************************/

const user: {
  organizationType: "BatMan"; // ?This is object literal that we can not change the value
  firstName: string;
  middleName?: string; /// OPTIONAL TYPE
  lastName: string;
} = {
  organizationType: "BatMan",
  firstName: "Redwan",
  lastName: "Hasan",
};

const user2: {
  readonly organizationType: string;
  firstName: string;
  middleName?: string;
  lastName: string;
} = {
  organizationType: "BATMAN WIFE",
  firstName: "Effat",
  middleName: "Ara",
  lastName: "Supti",
};

console.log(user);
console.log(user2);
