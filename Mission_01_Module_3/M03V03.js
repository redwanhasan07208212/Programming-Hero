//* for the stack we have 3 stack in there
// 1. push
// 2. pop
// 3. peek
class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }
  isEmpty() {
    return this.items.length === 0;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  print() {
    console.log(this.items.slice().reverse().join(" => "));
  }
}

const stack1 = new Stack();
stack1.push(5);
stack1.push(10);
stack1.push(15);
stack1.print(); // [5, 10, 15]
console.log(stack1.pop()); // 15
stack1.print(); // [5, 10]
console.log(stack1.peek()); // 10
stack1.print(); // [5, 10]
