// const createCounter = () => {
//   let count = 0;
//   return (amount) => {
//     count += amount;
//     return count;
//   };
// };

// const counter = createCounter();
// console.log(counter(5)); // 5
// console.log(counter(3)); // 8
// console.log(counter(10)); // 18

class Counter {
  constructor(count) {
    this.count = count;
  }
  add(amount) {
    this.count += amount;
  }
  print() {
    console.log(this.count);
  }
}

const counter1 = new Counter(0);

counter1.add(5);
counter1.add(3);
counter1.print();

const counter2 = new Counter(10);
counter2.add(20);
counter2.add(40);
counter2.print();
