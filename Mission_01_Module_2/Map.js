const obj = {
  nextLevel: { courseId: "Level 1" },
  "Programming Hero": { courseId: "Level 2" },
};
console.log(obj.nextLevel); // or we can access like this
console.log(obj["nextLevel"]); // or we can access like this
console.log(obj["Programming Hero"]);

const obj2 = {};
const course1 = { name: "JavaScript", duration: "3 months" };
const course2 = { name: "Python", duration: "4 months" };

obj2["course1"] = { courseId: "JS-101", ...course1 };
console.log(obj2);
