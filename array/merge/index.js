const Merge = require('./Merge');
const merge = new Merge();

const array1 = [1,5, 3, 4, 9, 10, 6, 7, 8];
const array2 = [-50,30, 200, 10, 20, 40, 50, 60, 4000,90000];

console.log("array1: ", array1);
console.log("sorted array1: ", merge.mergeSort(array1));
console.log("array2: ", array2);
console.log("sorted array2: ", merge.mergeSort(array2));