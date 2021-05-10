const LinkedList = require('./LinkedList');
const linkedList = new LinkedList(-5);

const root = linkedList.root;
const one = linkedList.addNode(1, root);
const two = linkedList.addNode(2, one);
const three = linkedList.addNode(3, two);
const four = linkedList.addNode(4, three);
const five = linkedList.addNode(5, four);

linkedList.print();

console.log("Reverse to the list");
linkedList.reverse();

linkedList.print();

console.log("Reverse to the list");
linkedList.reverse();

linkedList.print();
