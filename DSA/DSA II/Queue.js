class Queue {
  constructor(size) {
    this.items = {};
    this.cap = size;
    this.start = 0;
    this.end = 0;
  }

  enqueue(val) {
    const currSize = this.end - this.size;
    if (currSize === this.cap) return console.log("Queue is full");

    this.items[this.end++] = val;
  }

  dequeue() {
    const currSize = this.end - this.size;
    if (currSize === 0) return console.log("Queue is empty");

    delete this.items[this.start++];
  }
}

const queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
console.log(queue);
