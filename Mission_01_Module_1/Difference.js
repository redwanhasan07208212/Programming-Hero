function generateSimData(size) {
  const itemPool = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Blueberry",
    "Watermelon",
    "Peach",
  ];

  const generateData = [];
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * itemPool.length);
    generateData.push(itemPool[randomIndex]);
  }
  return generateData;
}
const simData = generateSimData(1000000);
console.log(simData.length);

//Brute Force Approach using Array
const arrStartTime = performance.now();
const removeDuplicateArray = (array) => {
  const uniqueArray = [];
  array.forEach((element) => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  });
  return uniqueArray;
};

console.log(removeDuplicateArray(simData));
const arrEndTime = performance.now();
console.log(
  `Array Method Execution time: ${arrEndTime - arrStartTime} milliseconds`
);
//Brute Force Approach using Array End

// Set Approach
const setStartTime = performance.now();
const removeDuplicateSet = (array) => {
  const uniqueSet = new Set(array);
  return Array.from(uniqueSet);
};
console.log(removeDuplicateSet(simData));
const setEndTime = performance.now();
console.log(
  `Set Method Execution time: ${setEndTime - setStartTime} milliseconds`
);
// Set Approach End
