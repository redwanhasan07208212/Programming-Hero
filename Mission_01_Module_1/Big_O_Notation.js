// const startTime = performance.now();

const firstArray = [];
const secondArray = [];
// console.time("taskDuration");
for (let i = 0; i < 600000; i++) {
  if (i < 300000) {
    firstArray.push(i);
  }
  secondArray.push(i);
}

// const endTime = performance.now();
// console.log(`Execution time: ${endTime - startTime} milliseconds`);
// console.timeEnd("taskDuration");

console.log(firstArray.length);
console.log(secondArray.length);
// ---------------Mapping over the arrays separately to demonstrate O(n) complexity---------------
console.time("map1");
const firstUserList = firstArray.map((user) => ({
  userId: user,
}));
console.timeEnd("map1");
console.time("map2");
const secondUserList = secondArray.map((user) => ({
  userId: user,
}));
console.timeEnd("map2");

// ---------------Mapping over the arrays separately to demonstrate O(n) complexity---------------

// ---------------finding an element in firstArray to demonstrate O(n) complexity---------------

console.time("find");
//const foundUser = secondUserList.find((user) => user.userId === 70000);
const user = secondUserList[200000];
console.timeEnd("find");
