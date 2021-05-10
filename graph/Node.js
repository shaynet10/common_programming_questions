class Node {
    constructor(value) {
        this.value = value;
        this.neighbors = new Set();
        this.isVisited = false;
    }

    addNeighbor(neighborNode) {
        this.neighbors.add(neighborNode);
    }

    removeNeighbor(neighborNode) {
        this.neighbors.delete(neighborNode);
    }

    neighborsAsString() {
        return [... this.neighbors].map((node) => node.value).join(",");
    }

    dfsPrint(space = "") {
        if (!this.isVisited) {
            console.log(`${space} ${this.value}  (${this.neighborsAsString()})`);
            this.isVisited = true;
            for (let neighbor of this.neighbors) {
                neighbor.dfsPrint(`${space}===`);
            }
        }
    }


    get(value) {
        return this.value;
    }

    set(value) {
        this.value = value;
    }

    get(isVisited) {
        return this.isVisited;
    }

    set(isVisited) {
        this.isVisited = isVisited;
    }
}

module.exports = Node;