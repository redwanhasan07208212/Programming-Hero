{
  const createArray = (param: string): string[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res2 = createArrayWithGeneric<{
    name: string;
    id: number;
    address: string;
  }>({ name: "Redwan", id: 2, address: "385/A North Goran" });
  console.log(res2);

  const createArrayWithTuple = <T, X>(par1: T, par2: X): [T, X] => {
    return [par1, par2];
  };

  const res3 = createArrayWithTuple<
    string,
    { name: string; job: string; description: string }
  >("Next Level Web Development", {
    name: "Redwan",
    job: "nextJsDeveloper",
    description: "Nothing to say",
  });
  console.log(res3);

  const addCourseToStudent = <T>(student: T) => {
    const courses = "Next Level Web Development";
    return { ...student, courses };
  };
  type Student = {
    name: string;
    id:number;
    email:string;
  }
  const student1 = addCourseToStudent<Student>({
    name: "Hasan",
    id: 1,
    email: "hasan@gmail.com",
  });
  console.log(student1);
}
