const BinaryTree = require('./binaryTree');
const binaryTree = new BinaryTree(8);
binaryTree.addValue(3);
binaryTree.addValue(10);
binaryTree.addValue(1);
binaryTree.addValue(6);
binaryTree.addValue(14);
binaryTree.addValue(4);
binaryTree.addValue(7);
binaryTree.addValue(13);

binaryTree.printTree();

console.log("Left view of tree is");
binaryTree.leftView();

let pathToValue, lca;
console.log("path to value 7");
pathToValue = binaryTree.getPathToValue(7, "valuesOnly");
console.log(pathToValue);

console.log("path to value 14");
pathToValue = binaryTree.getPathToValue(14, "valuesOnly");
console.log(pathToValue);

console.log("Least common anseccor of 7 and 14");
lca = binaryTree.lowestCommonAncestor(7, 14, "valuesOnly");
console.log(lca);


console.log("path to value 4");
pathToValue = binaryTree.getPathToValue(4, "valuesOnly");
console.log(pathToValue);

console.log("path to value 7");
pathToValue = binaryTree.getPathToValue(7, "valuesOnly");
console.log(pathToValue);

console.log("Least common anseccor of 4 and 7");
lca = binaryTree.lowestCommonAncestor(4, 7, "valuesOnly");
console.log(lca);