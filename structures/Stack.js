class Stack {
  constructor() {
    this.nodes = [];
    this.top = this.nodes[this.nodes.length - 1];
  }

  add(value) {
    this.nodes.push(value);
  }

  remove() {
    return this.nodes.pop();
  }
}

module.exports = Stack;
