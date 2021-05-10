const Node = require('./Node');

class LinkedList {
    constructor(value) {
        this._root = new Node(value);
    }

    get root() {
        return this._root;
    }

    addNode(value, nodeBase) {
        nodeBase.next = new Node(value);
        return nodeBase.next;
    }

    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    reverse() {
        let current = this._root;
        let prev = null;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this._root = prev;
        return this._root;
    }
}

module.exports = LinkedList;