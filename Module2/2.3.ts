{
  // generic
  type genericArray<T> = Array<T>;
  const rollNumbers: genericArray<number> = [1, 2, 3];
  const nameOfString: genericArray<string> = ["Redwan", "Hasan", "Siam"];
  const boolArray: genericArray<boolean> = [true, false, true];

  const user: genericArray<{ name: string; age: number; address: string }> = [
    {
      name: "Redwan Hasan",
      age: 24,
      address: "123 Main St, City, State, Country",
    },
    {
      name: "Jane Doe",
      age: 28,
      address: "456 Elm St, City, State, Country",
    },
  ];

  const add = (num1: number, num2: number) => num1 + num2;

  type genericTuple<X, Y> = [X, Y];
  const userWithId: genericTuple<
    number,
    { name: string; age: number; address: string }
  > = [1234, { name: "Redwan,", age: 28, address: "123 Main St, City" }];
}
