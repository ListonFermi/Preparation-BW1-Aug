class Stack {
  constructor(cap) {
    this.cap = cap;
    this.arr = [];
  }

  push(val) {
    if (this.arr.length === this.cap) return console.log("Stack is full");
    this.arr.push(val);
  }

  pop() {
    if (this.arr.length === 0) return console.log("Stack is empty");
    this.arr.pop();
  }
}

const stack = new Stack(5);
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
console.log(stack.arr);

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class StackLL {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    if (!this.size) return "stack is empty";

    const val = this.top.val;
    this.top = this.top.next;
    this.size--;
    return val;
  }

}

const stackLL = new StackLL();
stackLL.push(10);
stackLL.push(20);
stackLL.push(30);
