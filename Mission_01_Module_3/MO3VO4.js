class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.items.shift();
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log(this.items.join(" => "));
  }
}

const queue1 = new Queue();
queue1.enqueue(5);
queue1.enqueue(10);
queue1.enqueue(15);
queue1.print();
console.log(queue1.dequeue());
queue1.print();
console.log(queue1.peek());
queue1.print();
