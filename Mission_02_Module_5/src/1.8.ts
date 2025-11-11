{
  //object destructuring
  const user = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
    },
  };
  const {
    name: FirstName,
    age,
    address: { street, city, state },
  } = user;
  console.log(FirstName, age, street, city, state);
  const user2 = {
    id: 345,
    age: 24,
    name: {
      firstName: "Redwan",
      middleName: "Hasan",
      lastName: "Siam",
    },
  };
  const {
    age: newAge,
    name: { firstName: first, middleName: midName, lastName: last },
  } = user2;

  //   array destructuring
  const myFriends: string[] = [
    "Redwan",
    "Hasan",
    "Siam",
    "Efat",
    "Ara",
    "Supty",
  ];
  const [, , c, ...rest] = myFriends;
  console.log(rest);
}
