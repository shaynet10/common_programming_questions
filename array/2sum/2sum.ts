// Input: sorted array, target number.
// 2,7,11,15    9
// Find: 2 indexes i, j where arr[i] + arr[j] = target.

function twoSum(arr: number[], target: number): number[] {
    const foundNums: number[] = [];
    let i = 0; 
    let j = arr.length - 1;
    while (i < j) {
        const sum = arr[i] + arr[j];
        if (sum === target) {
            foundNums.push(i);
            foundNums.push(j);
            break;
        } else if (sum > target) { // Sum it too big, decrease j to get smaller sum.
            j--;
        } else { // sum it too small, increase i to get bigger sum.
            i++;
        }
    }

    return foundNums;
}

const arr = [2,7,11,15];
const target = 9;
console.log('arr: ', arr);
console.log('target: ', target);
console.log('twoSum: ', twoSum(arr, target));