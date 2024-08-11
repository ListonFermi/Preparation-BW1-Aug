class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(val) {
    const node = new Node(val);
    if (this.head) {
      this.head.prev = node;
      node.next = this.head;
    } else {
      this.tail = node;
    }
    this.head = node;
    this.size++;
  }

  append(val) {
    const node = new Node(val);
    if (this.head) {
      node.prev = this.tail;
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.size++;
  }

  print() {
    let curr = this.head;
    let out = "";
    while (curr) {
      out += curr.val + " ";
      curr = curr.next;
    }
    return out;
  }
}

const list = new LinkedList();

list.prepend(30);
list.prepend(20);
list.prepend(10);
list.append(40);
list.append(50);
list.append(60);

console.log(list.print());
