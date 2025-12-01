{
  let anything: any;

  anything = "Next level Web Development";
  anything = 222;
  // (anything as number)

  const kgtoGm = (value: string | number): string | number | undefined => {
    if (typeof value === "number") {
      return `The converted value is ${value * 1000}`;
    } else if (typeof value === "string") {
      const convertedValue = parseFloat(value);
      return convertedValue * 1000;
    }
  };

  const result1 = kgtoGm(1000) as number;
  const result2 = kgtoGm("1000") as string;

  type CustomError = {
    message: string;
  };
  try {
  } catch (err) {
    console.log((err as CustomError).message);
  }
}
