// mapped types

// map

const arrayOfNum: number[] = [1, 4, 6];

const arrayOfString: string[] = ["1", "4", "6"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap);

type AreaOfNum = {
  height: number;
  width: number;
};

type height = AreaOfNum["height"];

// type AreaOfString = {
//  height: string;
//   width: string;
// };

type Area<T> = {
  [key in keyof T]: T[key];

  // key >> height >> string
  // key >> width >> number
};

/*

T >>>   { height: string; width: number }
  
{  height: string; width: number }['height']: number

*/

//"height" |"width"

const area1: Area<{ height: string; width: boolean }> = {
  height: "50",
  width: false,
};
// type User = {
//   id: number;
//   name: string;
//   age: number;
//   address: {
//     street: string;
//     city: string;
//     zipCode: string;
//   };
// };
type User<T> = {
  [key in keyof T]: T[key];
};
const user: User<{
  id: number;
  name: string;
  age: number;
  address: { street: string; city: string; zipCode: string };
}> = {
  id: 1,
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Wonderland",
    zipCode: "12345",
  },
};
interface Product {
  id: number;
  name: string;
  price: number;
  manufacturer: {
    name: string;
    address: string;
  };
}

type ProductType<T> = { [key in keyof T]: T[key] };
