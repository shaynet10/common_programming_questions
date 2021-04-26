

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