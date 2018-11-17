// @flow

// @flow

class Node {
  data: *;

  next: Node | null;

  constructor(data: *) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null;

  tail: Node | null;

  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  appendToHead(data: *) {
    const start = new Node(data);

    if (this.head) {
      start.next = this.head;
    } else {
      this.tail = start;
    }
    this.head = start;
    this.size += 1;
  }

  appendToTail(data: *) {
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

export {
  Node,
  LinkedList,
};


class GraphNode {
  name: string;

  children: Array<GraphNode>;

  adjacent: Array<GraphNode>;

  constructor() {
    this.name = '';
    this.children = [];
    this.adjacent = [];
  }
}

class Graph {
  nodes: Array<GraphNode>;

  constructor() {
    this.nodes = [];
  }
}

export {
  GraphNode,
  Graph,
};


export class Queue {
  constructor () {
    this.content = [];
  }
  
  queue(node) {
    this.content.push(node);
  }
  dequeue() {
    return this.content.shift();
  }
  isEmpty() {
    return this.content.length === 0;
  }
}

