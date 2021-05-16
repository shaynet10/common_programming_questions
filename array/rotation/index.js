const Rotation = require('./Rotation');
const rotation = new Rotation();

const array = [1,2,3,4,5,6,7,8,9];

const rotatedFromEnd = rotation.rotate(array, 3, "end");

console.log('Original array: ', array);

console.log("Search results: ", rotation.binarySearch(array, 0, array.length - 1, 4));

console.log("Rotated by 3 from the end: ", rotatedFromEnd);

console.log("Search results of 4 in rotated: ", rotation.searchInRotated(rotatedFromEnd, 4));

console.log("Rotated by 3 from the start: ", rotation.rotate(array, 3, "start"));

console.log("Rotated from start and end: ", rotation.rotate(rotatedFromEnd, 3, "start"));
