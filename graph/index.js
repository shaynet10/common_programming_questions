const Graph = require('./Graph');
const graph = new Graph(10);
const root = graph.getNode(10);
const root1 = graph.addNode(1, root);
const root2 = graph.addNode(2, root);
const root3 = graph.addNode(3, root);
const root4 = graph.addNode(4, root);
const root5 = graph.addNode(5, root);
const node10 = graph.addNode(10, root5);
const node20 = graph.addNode(20, root5, node10);
const node30 = graph.addNode(30, root5, node10, node20);


graph.print();

console.log("Removing node item 5");

graph.removeNode(root5);

graph.print();