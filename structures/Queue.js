const { LinkedList, Node } = require('./LinkedList');

class Queue extends LinkedList {
  constructor() {
    super();

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(data) {
    this.appendToTail(data);
    // appendToTail increments size by 1

    if (!this.head) {
      this.head = this.tail;
    }
  }

  dequeue() {
    const oldHead = this.head;
    if (this.head) {
      this.head = this.head.next;
    }
    this.size -= 1;
    return oldHead;
  }

  isEmpty() {
    return this.length === 0;
  };
}

module.exports = Queue;
