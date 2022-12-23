class DoubleNodeC {
  value;
  prev;
  next;

  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  head;
  tail;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new DoubleNodeC(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }

    this.tail = newNode;
  }

  traverse(callback) {
    let currentNode = this.head;

    while (currentNode !== null) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
  }
}

const doublePrintNode = (node) => {
  console.log(
    `Node value: ${node.value}, next node: ${node.next ? node.next.value : null
    }`
  );
};

const doubleList = new DoubleLinkedList();
doubleList.append(1);
doubleList.append(2);
doubleList.append(3);

doubleList.traverse(doublePrintNode);
