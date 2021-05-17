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

    printMiddle() {
        let slow = this.root;
        let fast = this.root;
        while (fast) {
            slow = slow.next;
            fast = fast.next;
            if (fast) {
                fast = fast.next;
            }
            if (!fast || !fast.next) {
                console.log(slow.value);
                return;
            }
        }
    }

    printNthFromEnd(n) {
        let slow = this.root;
        let fast = this.root;
        for (let i=0; i<n; i++) {
            if (fast) {
                fast = fast.next;
            }
        }
        if (! fast) {
            console.error("No 5 elements in list");
            return;
        }
        while (fast) {
                slow = slow.next;
                fast = fast.next;
        }
        console.log(slow.value);
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


    swapDataInNodes(node1, node2) {
        let temp = node2.value;
        node2.value = node1.value;
        node1.value = temp;
    }


    // 2 --> 1 --> 4 --> 3
    // 1 --> 2 --> 3 --> 4
    reverseForEachSecond() {
        let current = this._root;
        let i = 0;
        while (current && current.next) {
            i++;
            if (i % 2  === 1) {
                this.swapDataInNodes(current, current.next);
            }
            current = current.next;
        }
    }
}

module.exports = LinkedList;