// const SubsetSum = require('./subsetSum');
// const subsetSum = new SubsetSum();

const subsetSum = require('./subsetSum');

const array = [ 3, 4, 5, 6, 10, 20, 30, 50, 100];
const target = 21;

// Output: 5, 6 , 10
console.log("Array is: ", array);
console.log("Subsetsum of target ", target, " is: ", JSON.stringify(subsetSum.subsetSum(array, target)));