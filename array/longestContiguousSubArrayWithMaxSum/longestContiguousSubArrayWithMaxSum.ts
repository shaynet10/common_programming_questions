// Given an array: [-2,-3,4,-1,-2,1,5,-3];
// Return: [4,-1,-2,1,5]
// Explanation: 4 - 1 -2 + 1 + 5 = 7  
// The entire array sum is: -1
// Adding any other cell value to it, will decrease it
// Selecting less elements will decrease it.

function maxContiguousSum(array: number[]): number[] {
    const maxSumTillElement: number[] = new Array(array.length);
    for (let i = 1; i < array.length; i++) {
        const sumTillElement = maxSumTillElement[i-1] + array[i];
        if (sumTillElement > array[i]) {
            maxSumTillElement[i] = sumTillElement;
        } else {
            maxSumTillElement[i] = array[i];
        }
    }

    let indexMaxSum = maxSumTillElement.length - 1;
    let maxSum = maxSumTillElement[indexMaxSum];
    let maxSumElements: number[] = [];
    for (let i = maxSumTillElement.length - 2; i >= 0; i--) {
        if (maxSumTillElement[i] > maxSum) {
            indexMaxSum = i;
            maxSum = maxSumTillElement[i];
        }
    }

    for (let i = indexMaxSum; i >= 0; i--) { // Get the elements.
        if (maxSum > 0) {
            maxSumElements.unshift(array[i]);
            maxSum -= array[i];
        } else {
            break;
        }
    }

    return maxSumElements;
}

const arr = [-2,-3,4,-1,-2,1,5,-3];
console.log('arr: ', arr);
console.log('max contiguous sum: ', maxContiguousSum(arr));