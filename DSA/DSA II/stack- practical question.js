class Stack {
  constructor() {
    this.arr = [];
  }

  push(val) {
    if (this.arr.includes(val)) {
      const ind = this.arr.indexOf(val);
      this.arr.splice(ind, 1);
    }
    this.arr.push(val);
  }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(10)
console.log(stack)