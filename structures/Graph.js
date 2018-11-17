class GraphNode {
  constructor(name) {
    this.name = name;
    this.adjacent = [];
  }
}

class Graph {
constructor() {
    this.nodes = [];
  }
  addNode(name) {
    this.nodes.push(new GraphNode(name));
  }
  addEdge(A, B) {
    const nodes = this.nodes.filter(node => node.name === A || node.name === B);
    if (nodes.length > 1) {
      nodes[0].adjacent.push(nodes[1]);
      nodes[1].adjacent.push(nodes[0]);
      return nodes;
    } else {
      throw Error(`No way to connect nodes ${A} and ${B}`)
    }
  }
  
}

module.exports = {
  GraphNode,
  Graph,
};
