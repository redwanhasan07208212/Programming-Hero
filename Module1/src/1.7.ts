{
  // spread operator
  const user = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
    },
  };

  const updatedUser = {
    ...user,
    age: user.age + 1,
    address: {
      ...user.address,
      street: "456 Elm St",
    },
  };

  console.log(updatedUser);

  const bros1: string[] = ["Jhon", "Sina", "Tablet"];
  const bros2: string[] = ["Happy", "Nappy", "Khusi"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    javascript: "Sami",
    react: "Taimour",
    graphql: "Mohammad",
  };
  const combinedMentors = {
    ...mentors1,
    ...mentors2,
  };

  //learn rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
  greetFriends("John", "Alice", "Bob");
}
