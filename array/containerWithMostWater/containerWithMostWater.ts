// Input: heights [1,8,6,2,5,4,8,3,7]
// Output: 49 
// Why: max height from left: 8 from right: 7 so 7, 
// distance between 8 and 7 is 7
// total: 7 * 7 = 49.

function containerWithMostWater(arr: number[]): number {
    let i = 0;
    let j = arr.length - 1;
    let maxWater = 0;
    let maxLeft = 0;
    let maxRight = 0;
    while (i < j) {
        const length = j - i; // length is of max or smaller.
        if (maxLeft < arr[i]) {
            maxLeft = arr[i];
        }
        if (maxRight < arr[j]) {
            maxRight = arr[j];
        }
        const curWater = Math.min(maxLeft, maxRight) * length;
        if (curWater > maxWater) {
            maxWater = curWater;
        }

        if (arr[i] < arr[j]) {
            i++;
        } else {
            j--;
        }
    }
    return maxWater;
}

const arr = [1,8,6,2,5,4,8,3,7,1];
console.log('arr:', arr);
console.log('containerWithMostWater:', containerWithMostWater(arr));