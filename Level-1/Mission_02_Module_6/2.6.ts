{
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const result1 = createArray("Bangladesh");
  const result2 = createArrayWithGeneric<string>("Bangladesh");

  type User1 = {
    name: string;
    age: number;
    address: string;
  };
  interface User2 {
    name: string;
    age: number;
    address: string;
  }
  const user1 = createArrayWithGeneric<User2>({
    name: "Redwan",
    age: 20,
    address: "235/8 East Goran",
  });

  const createArrayWithGenericTuple = <T, X>(param1: T, param2: X): [T, X] => {
    return [param1, param2];
  };

  const result3 = createArrayWithGenericTuple<string, number>(
    "Bangladesh",
    1000
  );
  const result4 = createArrayWithGenericTuple<User1, string>(
    {
      name: "Hasan",
      age: 25,
      address: "236/9 West Goran",
    },
    "Bangladesh"
  );

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const courses = "Next level Web Development";
    return {
      ...student,
      courses,
    };
  };
  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 1,
    name: "Hasan",
    email: "@gamil.com",
    devType: "react-developer",
  });
  const student2 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    hasWatch: string;
  }>({
    id: 2,
    name: "Redwan",
    email: "redwan@gmail.com",
    hasWatch: "Apple-Watch",
  });

  const student3 = addCourseToStudent({
    id: 3,
    name: "Supty",
    email: "supty@gmail.com",
    hasWatch: "Apple-Watch",
  });
}
