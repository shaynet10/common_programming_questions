

class BinaryTree {
    constructor(value = 0) {
        this.root =  this.createNode(value);
    }

    isValueInTree(value, node = this.root) {
        if (node === null) return false;
        if (value === node.value) return true;
        if (value < node.value) return this.isValueInTree(value, node.left);
        return this.isValueInTree(value, node.right);
    }

    printTree(node = this.root) {
        console.log(JSON.stringify(node, null, 4));
    }

    getAllNodes(node = this.root, nodesArray = []) {
        nodesArray.push(node);
        if (node.left) {
            this.getAllNodes(node.left, nodesArray);
        }
        if (node.right) {
            this.getAllNodes(node.right, nodesArray);
        }
        return nodesArray;
    }

    leftView(node = this.root, direction = "left") {
        if (direction === "left") { 
            console.log(node.value);
        }
        if (node.right) {
            this.leftView(node.right, "right");
        }
        if (node.left) {
            this.leftView(node.left, "left");
        }
    }

    getPathToValue(value, options = "") {
        let path = [];
        let current = this.root;
        while (current) {
            path.push(current);
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                if (options === "valuesOnly") {
                    return path.map((node) => node.value);
                }
                return path;
            }
        }
        return [];
    }


    lowestCommonAncestor(value1, value2, options = "") {
        const path1 = this.getPathToValue(value1);
        const path2 = this.getPathToValue(value2);
        const path2Set = new Set(path2);
        for (let path1Index = path1.length - 1; path1Index >= 0; path1Index--) {
            const path1Node = path1[path1Index];
            if (path2Set.has(path1Node)) {
                if (options === "valuesOnly") return path1Node.value;
                return path1Node;
            }
        }
    }

    isLeaf(node) {
        return node && !node.left && !node.right;
    }

    addValue(value, node = this.root) {
        if (node === null) return null;
        if (value < node.value) {
            if (!node.left) return this.addLeft(value, node);
            return this.addValue(value, node.left);
        }
        if (value >= node.value) {
            if (!node.right) return this.addRight(value, node);
            return this.addValue(value, node.right);
        }
        if (this.isLeaf(node)) {
            return this.addToLeaf(value, node);
        };
    }

    addRight(value, node) {
        node.right = this.createNode(value);
    }

    addLeft(value, node) {
        node.left = this.createNode(value);
    }

    addToLeaf(value, leafNode) {
        if (value < leafNode.value) return this.addLeft(value, leafNode);
        return this.addRight(value, leafNode);
    }

    createNode(value, left = null, right = null) {
        return {
            value,
            left,
            right
        };
    }
}

module.exports = BinaryTree;