{
  const age: number = 18;
  if (age <= 18) {
    console.log("Not Adult");
  } else {
    console.log("Adult");
  }

  const UserAge = age >= 18 ? "Adult" : "Child";
  console.log(UserAge);

  const isAuthenticated = "";

  const greetings = isAuthenticated ?? "Welcome";
  const greeting = isAuthenticated ? isAuthenticated : "Welcome";
  console.log({ greetings }, { greeting });

  const user = {
    name: "Persian",
    address: {
      city: "ctg",
      road: "Awesome Road",
      presentaddress: "ctg town",
    },
  };
  const permanentAddress = user?.address?.permanentAddress ?? 'No permanent address';
  console.log({permanentAddress});
}
