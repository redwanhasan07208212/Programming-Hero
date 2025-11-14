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
    return this;
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
    return this;
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
    const leadingNode = this._traverseNode(index - 1);
    const holdingNode = leadingNode.next;
    //* console.log(leadingNode);
    const newNode = new Node(value);
    leadingNode.next = newNode;
    newNode.next = holdingNode;

    this.length++;
  }

  _traverseNode(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
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
linkedList.append(1).append(2).append(3);
linkedList.prepend(10).prepend(30).prepend(40);
linkedList.insert(2, 20);
linkedList.print();
