class Graph {
    constructor() {
        this.createdNodes = [];
    }

    createNode(value, neighbors = []) {
        const node = {
            value,
            neighbors,
            isVisited = false
        };
        this.createdNodes.push(node);
        neighbors.forEach((neighbor) => addNeighbor(neighbor, node)); // Graph with no directions
        return node;
    }

    addNeighbor(orgNode, newNeighbor) {
        orgNode.neighbors.push(newNeighbor);
    }

    removeNeighbor(orgNode, neighborToRemove) {
        orgNode.neighbors = orgNode.neighbors.filter((node) => node.value !== neighborToRemove.value);
    }

    getNode(value) {
        return this.createdNodes.find((node) => node.value === value);
    }

    removeNode(value) {
        const found = this.getNode(value);
        if (!found) return;
        found.neighbors.forEach((neighbor) => removeNeighbor(neighbor, node));
        this.createdNodes = this.createdNodes.filter((node) => node.value !== value);
    }
}