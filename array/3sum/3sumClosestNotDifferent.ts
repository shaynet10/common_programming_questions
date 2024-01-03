// Given: array of numbers, and num, we want to find 3 elements
// Where [a,b,c] = sum.
// And |sum| is closest to the num.
// Algo:
// sort the elements.
// once sorted, we know that 
// for each i 
// a[i-2] + a[i-1] + a[i]
// can be closer
// or far from sum.
// since the array is sorted.
function getClosestFromThreeElements(number1: number, number2: number, number3: number, target: number) {
    let closestSum: number = 0;
    [
    number1 + number2 + number3,
    number1 + (number2 * 2),               // Cases from here down, are since the 3 numbers can be the same.
    number1 + (number3 * 2),
    (number1 * 2) + number2,
    (number1 * 2) + number3,
    number1 * 3,
    number2 + (number3 * 2),
    (number2 * 2) + number3,
    number2 * 3,
    number3 * 3,
    ].forEach(currentSum => {
        if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
            closestSum = currentSum;
        }
    });
    return closestSum;
}


function threeSumClosestNoDiff(numbers: number[], target: number): number {
    numbers.sort((a,b) => a - b); // O(nlogn)
    let closestSum = getClosestFromThreeElements(numbers[0],numbers[1],numbers[2], target);
    for (let i = 3; i < numbers.length; i++) {
        const currentSum = getClosestFromThreeElements(numbers[i], numbers[i-1], numbers[i-2], target);
        if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
            closestSum = currentSum;
        }
    }
    return closestSum;
}

[
    [-1,2,1,-4],
    [0,0,0],
    [0,1,1],
].forEach(arr => {
    console.log('arr: ', arr);
    console.log('target: ', 1);
    console.log('threeSumClosestNoDiff: ', threeSumClosestNoDiff(arr, 1));    
});
