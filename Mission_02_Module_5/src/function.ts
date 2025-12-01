/**********************************************
 // ??? Type: Function
 // ??? NORMAL FUNCTION
 **********************************************/
function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(addNormal(45, 32));

/**********************************************
 // ??? Type: Function
 // ??? ARROW FUNCTION
 **********************************************/
const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};
console.log(addArrow(32, 8));

/**********************************************
 // ??? Type: Function
 // ??? OBJECT FUNCTION
 **********************************************/

const poorUser = {
  name: "Redwan",
  balance: 0,
  addBalance(value: number): number {
    return this.balance + value;
  },
};

console.log(poorUser.addBalance(57));
console.log(poorUser);

/**********************************************
 // ??? Type: Function
 // ??? Loop FUNCTION
 **********************************************/

const arr: number[] = [2, 4, 6];
const squareNumber = arr.map((ele: number): number => ele * ele);
console.log(squareNumber);
