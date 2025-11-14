class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the linked list is not empty
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.error("This is out of index bound");
      return undefined;
    }
    if (index === 0) {
      this.prepend(value);
    }
    if (index === this.length) {
      this.append(value);
    }
    // find the leading one
    let count = 0;
    let leadingNode = this.head;
    while (count !== index - 1) {
      leadingNode = leadingNode.next;
      count++;
    }
    console.log(leadingNode);
  }

  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr.join(" -> "), "-> null ");
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);
linkedList.insert(2, 40);
linkedList.print();
