/**********************************************
 // ??? Type: Alias
 // ??? Object Type
**********************************************/
interface user {
  id: number;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
}

const user1: user = {
  id: 123,
  name: {
    firstName: "Redwan",
    middleName: "Hasan",
    lastName: "Siam",
  },
  gender: "male",
  contactNo: "01568283360",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

const user2: user = {
  id: 124,
  name: {
    firstName: "Effat",
    middleName: "Ara",
    lastName: "Supty",
  },
  gender: "female",
  contactNo: "01568283360",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};
console.log(user1, user2);

type AddFunc = (num1: number, num2: number) => number;
const addFunc: AddFunc = (num1, num2) => {
  return num1 + num2;
};
