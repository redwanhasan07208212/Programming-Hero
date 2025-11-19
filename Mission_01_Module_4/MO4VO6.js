// console.log(binarySearch([3, 5, 6, 7, 9, 11], 7)); // Output: 3
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const guess = arr[mid];

    if (guess === target) {
      return mid;
    } else if (guess < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch([3, 5, 6, 7, 9, 11], 7));
