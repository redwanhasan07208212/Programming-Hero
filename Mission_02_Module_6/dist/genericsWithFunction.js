"use strict";
// const createArrayWithString = (value: string) => [value];
// const createArrayWithNumber = (value: number) => [value];
// const createArrayWithObject = (value: object) => [value];
Object.defineProperty(exports, "__esModule", { value: true });
const createArrayWithGeneric = (value) => {
    return [value];
};
const arrString = createArrayWithGeneric("Apple");
const arrNum = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({
    id: 123,
    name: "Next Level",
});
console.log(arrString, arrNum, arrObj);
const createArrayWithTuple = (param1, param2) => {
    return [param1, param2];
};
const createArrayWithGenericTuple = (param1, param2) => {
    return [param1, param2];
};
const tuple1 = createArrayWithTuple("Apple", "Banana");
const tuple2 = createArrayWithGenericTuple("Next Level", 12345);
const tuple3 = createArrayWithGenericTuple(true, "True Value");
console.log(tuple1, tuple2, tuple3);
const addStudentToCourse = (student) => {
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
//# sourceMappingURL=genericsWithFunction.js.map