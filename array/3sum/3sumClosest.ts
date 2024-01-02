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
function threeSumClosest(numbers: number[], target: number): number {
    if (numbers.length < 3) {
        return -1;
    }
    numbers.sort((a,b) => a - b); // O(nlogn)
    let closestSum = numbers[0] + numbers[1] + numbers[2];
    for (let i = 3; i < numbers.length; i++) {
        const currentClosestSum = numbers[i] + numbers[i-1] + numbers[i-2];
        if (Math.abs(target - currentClosestSum) < Math.abs(target - closestSum)) {
            closestSum = currentClosestSum;
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
    console.log('threeSumClosest: ', threeSumClosest(arr, 1));    
});
