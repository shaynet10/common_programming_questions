const Merge = require('./Merge');
const merge = new Merge();

const array1 = [1,3,5,6,7,8];
const array2 = [-50,30, 200, 4000,90000];

const mergedResults = merge.mergeSortedArrays(array1, array2);

console.log("array1: ", array1);
console.log("array2: ", array2);
console.log("merged: ", mergedResults);