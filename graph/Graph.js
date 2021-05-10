const Node = require('./Node');

// Graph
// each node has list of neighbors
// can be: a --> b --> a 
//         a --> a
//         a --> b --> c --> a

class Graph {
    constructor(rootValue) {
        this.nodes = [];
        this.root = this.addNode(rootValue);
    }

    addNode(value, ...neighbors) {
        const node = new Node(value);
        for (let neighbor of neighbors) {      
            node.addNeighbor(neighbor);
            neighbor.addNeighbor(node);
        }
        this.nodes.push(node);
        return node;
    }

    removeNode(node) {
        for (let neighbor of node.neighbors) {
            neighbor.removeNeighbor(node);
        }
        this.nodes = this.nodes.filter((nodeObject) => nodeObject !== node);
    }

    getNode(value) {
        return this.nodes.find((node) => node.value === value);
    }

    noVisitAllNodes() {
        for (let node of this.nodes) {
            node.isVisited = false;
        }        
    }

    print() {
        this.noVisitAllNodes();
        for (let node of this.nodes) {
            node.bfsPrint();
        }
    }

    printDfs() {
        this.noVisitAllNodes();
        for (let node of this.nodes) {
            node.dfsPrint();
        }
    }
}

module.exports = Graph;