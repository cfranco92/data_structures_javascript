class Graph {
  nodes: string[];
  adjList: {};

  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node: string) {
    this.nodes.push(node);
    this.adjList[node] = [];
  }

  addEdge(node1: string, node2: string) {
    this.adjList[node1].push(node2);
    this.adjList[node2].push(node1);
  }
}

const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

// Graph { nodes: [ 'A', 'B', 'C', 'D', 'E' ], adjList: { A: [ 'B', 'C' ], B: [ 'A', 'D' ], C: [ 'A', 'E' ], D: [ 'B' ], E: [ 'C' ] } }
console.log(graph);
