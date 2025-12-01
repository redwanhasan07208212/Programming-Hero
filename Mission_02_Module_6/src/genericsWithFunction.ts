// const createArrayWithString = (value: string) => [value];
// const createArrayWithNumber = (value: number) => [value];
// const createArrayWithObject = (value: object) => [value];

const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};
const arrString = createArrayWithGeneric("Apple");
const arrNum = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({
  id: 123,
  name: "Next Level",
});

console.log(arrString, arrNum, arrObj);

const createArrayWithTuple = (param1: string, param2: string) => {
  return [param1, param2];
};

const createArrayWithGenericTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

const tuple1 = createArrayWithTuple("Apple", "Banana");
const tuple2 = createArrayWithGenericTuple<string, number>("Next Level", 12345);
const tuple3 = createArrayWithGenericTuple<boolean, string>(true, "True Value");

console.log(tuple1, tuple2, tuple3);

const addStudentToCourse = <T>(student: T): T => {
  return { course: "Next Level Web Development", ...student };
};

const student1 = {
  id: 123,
  name: "Mezba",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Redwan Hasan",
  hasCar: true,
  isMarried: true,
};
console.log(addStudentToCourse(student1), addStudentToCourse(student2));
