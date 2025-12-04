class Counter {
  static count: number = 0;

  constructor() {
    Counter.count += 1;
  }

  static getCount(): number {
    return Counter.count;
  }
  increment(): void {
    Counter.count += 1;
  }
  decrement(): void {
    Counter.count -= 1;
  }
}
//test cases
const counter1 = new Counter();
const counter2 = new Counter();
const counter3 = new Counter();
console.log(Counter.getCount()); // Output: 2

counter1.increment();
counter1.increment();
counter3.increment();
console.log(Counter.getCount()); // Output: 3

counter2.decrement();
console.log(Counter.getCount()); // Output: 2
