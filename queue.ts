// FIFO: First In First Out

class Queue {
  items: number[] = [];

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

const queue = new Queue();
queue.enqueue(1); // [1]
queue.enqueue(2); // [1, 2]
queue.enqueue(3); // [1, 2, 3]

queue.peek(); // 3
queue.dequeue(); // 1
queue.peek(); // 2

console.log(queue); // [2, 3]