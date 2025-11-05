// const obj = {
//   nextLevel: { courseId: "Level 1" },
//   "Programming Hero": { courseId: "Level 2" },
// };
// console.log(obj.nextLevel); // or we can access like this
// console.log(obj["nextLevel"]); // or we can access like this
// console.log(obj["Programming Hero"]);

// const obj2 = {};
// const course1 = { name: "JavaScript", duration: "3 months" };
// const course2 = { name: "Python", duration: "4 months" };

// obj2["course1"] = { courseId: "JS-101", ...course1 };
// console.log(obj2);

// const fruits = { name: "Mango", color: "Yellow" };
// const obj3 = {};
// obj3.animal = { name: "Cow", color: "White" };
// obj3[fruits] = { name: "Banana", color: "Deep Yellow" };
// console.log(obj3["[object Object]"]);

// // Example of Map
// const map = new Map();
// map.set("course1", { courseId: "JS-101", name: "JavaScript" });
// map.set("course2", { courseId: "PY-101", name: "Python" });
// console.log(map.get("course1"));
// console.log(map.get("course2"));
// const keyObj = { id: 1 };
// map.set(keyObj, { courseId: "RB-101", name: "Ruby" });
// console.log(map.get(keyObj));

// const fruit1 = { name: "Mango", color: "Yellow" };
// const fruit2 = { name: "Banana", color: "Deep Yellow" };
// map.set(fruit1, { taste: "Sweet" });
// map.set(fruit2, { taste: "Very Sweet" });
// console.log(map.get(fruit1));
// console.log(map.get(fruit2));

// // Iterating over Map
// for (const [key, value] of map) {
//   console.log("Key: ", key, "Value: ", value);
// }

// map.forEach((value, key) => {
//   console.log("Key: ", key, "Value: ", value);
// });
// // map.clear(); // clear all entries
// console.log(map.size);
// map.delete("course1");
// console.log(map.size);
// console.log(map.has("course2"));

// const subject1 = ["Math", "Science", "History"];
// const subject2 = ["Art", "Physical Education", "Music"];

// const subjectMap = new Map();
// subjectMap.set("sub1", subject1);
// subjectMap.set("sub2", subject2);
// console.log(subjectMap);

const course1 = { name: "JavaScript", duration: "3 months" };
const course2 = { name: "Python", duration: "4 months" };
const map = new Map();
map.set("course1", course1);
map.set("course2", course2);
for (const key of map.keys()) {
  console.log(key);
}
