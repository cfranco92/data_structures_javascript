class NodeC {
  value;
  next;

  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head;
  tail;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new NodeC(value);

    if (!this.head) {
      this.head = newNode;
    }

    if (this.tail) {
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

const printNode = (node) => {
  console.log(
    `Node value: ${node.value}, next node: ${
      node.next ? node.next.value : null
    }`
  );
};

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

list.traverse(printNode);
