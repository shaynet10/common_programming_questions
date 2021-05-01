// package binarytree;

class Node {
    int value;
    Node left, right;

    Node(int dataArg) {
        value = dataArg;
    }
}

class BinaryTree {
    Node root;

    BinaryTree(int value) {
        root = new Node(value);
    }

    Node add(int value) {
        return this.add(value, root);
    }

    Node add(int value, Node node) {
        if (value < node.value) {
            if (node.left == null) {
                return addLeft(value, node);
            }
            return add(value, node.left);
        }
        if (value >= node.value) {
            if (node.right == null) {
                return addRight(value, node);
            }
            return add(value, node.right);
        }
        if (isLeaf(node)) {
            return addToLeaf(value, node);
        }
        return null;
    }

    boolean isLeaf(Node node) {
        return (node != null) && (node.right == null) && (node.left == null); 
    }

    Node addToLeaf(int value, Node node) {
        if (value < node.value) return addLeft(value, node);
        return addRight(value, node);
    }

    Node addLeft(int value, Node node) {
        node.left = new Node(value);
        return node.left;
    }

    Node addRight(int value, Node node) {
        node.right = new Node(value);
        return node.right;
    }

    public void printTree() {
        print(this.root);
    }

    public void print(Node node) {
        if (node != null) {
            System.out.println(node.value);
            System.out.println("Left");
            print(node.left);
            System.out.println("Right");
            print(node.right);
        }
    }
}


class Main {
     public static void main(String[] args) {
        BinaryTree binaryTree = new BinaryTree(8);
        binaryTree.add(3);
        binaryTree.add(10);
        binaryTree.add(1);
        binaryTree.add(6);
        binaryTree.add(14);
        binaryTree.add(4);
        binaryTree.add(7);
        binaryTree.add(13);
        binaryTree.printTree();
     }
}