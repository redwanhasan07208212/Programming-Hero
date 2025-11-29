interface student {
  id: number;
  name: string;
  dob: string;
  class: number;
}

const addStudentToCourse = <T extends student>(studentInfo: T) => {
  return { course: "Next Level Web Development", ...studentInfo };
};

const student1 = {
  id: 123,
  name: "Mezba",
  dob: "01-01-2000",
  class: 10,
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Redwan Hasan",
  dob: "02-02-1995",
  class: 12,
  hasCar: true,
  isMarried: true,
};

console.log(addStudentToCourse(student1), addStudentToCourse(student2));
