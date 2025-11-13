//* for the stack we have 3 stack in there
// 1. push
// 2. pop
// 3. peek
class Stack {
  constructor() {
    this.items = [];
  }

  //* O(1)
  push(value) {
    this.items.push(value);
  }

  //* O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  //* O(1)
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  //* O(1)
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  //* O(n)
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
