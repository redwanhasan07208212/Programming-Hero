// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(2); // Duplicate, will be ignored

// console.log(set.has(1)); // true
// console.log(set.has(3)); // false

// set.delete(2);
// console.log(set.size); // 1

// for (const item of set) {
//   console.log(item);
// }

const arr = ["apple", "banana", "apple", "orange", "banana"];
const newSet = new Set(arr);
console.log(newSet.has("orange")); // true
console.log(newSet.has("grape")); // false
console.log(newSet.delete("banana")); // true
console.log(newSet);
console.log(newSet.size);
const removeDuplicatesArr = (array) => {
  const newArray = [];
  array.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });

  return newArray;
};

console.log(removeDuplicatesArr(arr)); // ["apple", "banana", "orange"]

const removeDuplicatesSet = (array) => {
  const set = new Set(array);
  return Array.from(set);
};

console.log(removeDuplicatesSet(arr)); // ["apple", "banana", "orange"]
