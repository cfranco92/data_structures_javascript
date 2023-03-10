// LIFO: Last In First Out
class Stack {
  items: number[] = [];

  constructor() {
    this.items = [];
  }

  push(item: number) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

stack.peek(); // 3
stack.pop(); // 3
stack.peek(); // 2

console.log(stack)