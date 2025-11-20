{
  let FirstName: string = "Redwan Hasan";
  let digit: number = 34;
  let isAdmin: boolean = false;
  let x: null = null;
  let courses: string[] = [
    "Web Development",
    "Data Science",
    "Machine Learning",
  ];
  let eligibleRoll: number[] = [34, 78, 65, 80];

  let d; // this is called the anytype data structure its not good practice for declare anytype.

  d = 8;
  d = "Hello";
  d = [1, 2, 3, 4]; // thats why we are not using the anytype data structure because we can assign different value in one variable.
  let coordinates: [number, number] = [34, 67];
  let ageName: [number, string] = [45, "Redwan"]; // this is called tuple

  console.log("First Name:", FirstName);
  console.log("Digit:", digit);
  console.log("Is Admin:", isAdmin);
  console.log("Courses:", courses);
  console.log("Eligible Roll Numbers:", eligibleRoll);
  console.log("x:", x);
  console.log("Coordinates:", coordinates);
  console.log("Age and Name:", ageName);
}
