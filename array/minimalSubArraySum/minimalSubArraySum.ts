// Input: arr: [1,4,4] target: 8
// Output: 2
// Why: the minimum amount of cell with sum 4 is 1.
// Idea: get the highest num closest to target
// remove num from the arr/set.
// minmalAmount++
// Do the same on target - num.

function minimalSubArraySum(arr: number[], target: number): number {
    let minialAmount = 0;
    let t = target;
    const amounts: { [key: number]: number } = {};
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        if (!amounts[val]) {
            amounts[val] = 0;
        }
        amounts[val]++;
    }

    for (let curTarget = t; curTarget > 0; curTarget--) {
        while (amounts[curTarget]) { // value exists.
            if (t - curTarget >= 0) { // highest value helps to be closer to 0.
                minialAmount++;
                t = t - curTarget;
            }
            amounts[curTarget]--; // decrease the amounts. 
        }
    }

    return minialAmount;
}

const arr = [1,4,4];
const target = 8;
console.log('arr: ', arr);
console.log('target: ', target);
console.log('minimalSubArraySum: ', minimalSubArraySum(arr, target));