{
  type Student = {
    name?: string;
    age?: number;
    grade?: string;
    gender?: string;
    address?: {
      street: string;
      city: string;
      state: string;
    };
  };
  const student1: Student = {
    name: "Redwan Hasan",
    age: 24,
    grade: "A",
    gender: "Male",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
    },
  };
  const student2: Student = {
    name: "Hasan Siam",
    age: 27,
    grade: "A",
    gender: "Male",
    address: {
      street: "543 Main Street",
      city: "Washington",
      state: "mediate",
    },
  };
  const student3: Student = {
    name: "Efat Ara Supty",
    age: 28,
    grade: "A",
    gender: "Female",
    address: {
      street: "543 Main Street",
      city: "Washington",
      state: "mediate",
    },
  };

  type UserName = string;
  type UserAge = number;
  type UserGender = "Male" | "Female";
  type UserAddress = {
    street: string;
    city: string;
    state: string;
  };

  const userName: UserName = "Hasan Siam";
  const userAge: UserAge = 27;
  const userGender: UserGender = "Male";
  const userAddress: UserAddress = {
    street: "543 Main Street",
    city: "Washington",
    state: "Middle",
  };
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
