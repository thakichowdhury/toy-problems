class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  appendToHead(data) {
    const start = new Node(data);

    if (this.head) {
      start.next = this.head;
    } else {
      this.tail = start;
    }
    this.head = start;
    this.size += 1;
  }

  appendToTail(data) {
    const end = new Node(data);

    if (this.tail) {
      this.tail.next = end;
    } else {
      this.head = end;
    }
    this.tail = end;
    this.size += 1;
  }
}

module.exports = {
  Node,
  LinkedList,
};
