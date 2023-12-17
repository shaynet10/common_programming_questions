// Each element tells us the maximum amount we can go jump.
// Return true: if we reach the last element, from the jumps.
// Return false: otherwise.

function jumpGame(nums: number[]): boolean {
    let reachableIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        console.log('i: ', i);
        if (i > reachableIndex) {
            return false; // hole, we cannot go further.
        }

        const nextIndex = i + nums[i];
        if (nextIndex > reachableIndex) {
            reachableIndex = nextIndex;
        }
        console.log('nextIndex: ', nextIndex);
        console.log('reachableIndex: ', reachableIndex);
    }

    return true;
}

const arr = [1,2,3,0,0,1,0];
const arr2 = [2,2,0,1];
const arr3 = [2,1,0,1];

console.log('arr1: ', arr);
console.log('canJump: ', jumpGame(arr));
console.log('arr2: ', arr2);
console.log('canJump: ', jumpGame(arr2));
console.log('arr3: ', arr3);
console.log('canJump: ', jumpGame(arr3));