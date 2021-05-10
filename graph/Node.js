class Node {
    constructor(value) {
        this._value = value;
        this.neighbors = new Set();
        this._isVisited = false;
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

    bfsPrint(space = "") {
        if (!this._isVisited) {
            console.log(`${space} ${this._value}  (${this.neighborsAsString()})`);
            this._isVisited = true;
            for (let neighbor of this.neighbors) {
                neighbor.bfsPrint(`${space}===`);
            }
        }
    }

    dfsPrint(space = "") {
        if (!this._isVisited) {
            this._isVisited = true;
            for (let neighbor of this.neighbors) {
                neighbor.dfsPrint(`${space}===`);
            }
            console.log(`${space} ${this._value}  (${this.neighborsAsString()})`);
        }
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = newValue;
    }

    get isVisited() {
        return this._isVisited;
    }

    set isVisited(newIsVisited) {
        this._isVisited = newIsVisited;
    }
}

module.exports = Node;