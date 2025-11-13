const createCounter = () => {
  let count = 0;
  return (amount) => {
    count += amount;
    return count;
  };
};

const counter = createCounter();
console.log(counter(5)); // 5
console.log(counter(3)); // 8
console.log(counter(10)); // 18
