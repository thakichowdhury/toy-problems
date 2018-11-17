const Queue = require('../../structures/Queue');

const checkRoute = (a, b, graph) => {
  // i: Graph, Node (A), Node (B)
  // o: boolean

  // use a breadth first search through A and see if you find B
  // make a queue
  // pass the root (A, in this case) into the queue
  // mark the node as visited
  // while the queue is not empty
    // dequeue the earliest node from the queue
    // if that node is equal to node B
      // return true
    // else
      // iterate through all of the adjacent nodes in the dequeued node
        // pass into queue
  // return false

  const queue = new Queue();
  const NodeA = graph.nodes.filter(node => node.name === a)[0];
  queue.enqueue(NodeA);
  NodeA.visited = true;

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    if (node.name === b) {
      return true;
    }
    if (!node.visited) {
      node.visited = true;
      console.log(node);
      node.adjacent.forEach(child => queue.enqueue(child));
    }
  }
  return false;
};

module.exports = checkRoute;
