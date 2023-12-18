// Each element tells us the maximum amount we can go jump.
// Return -1: if we cant reach the last element
// Return shortest length if we can reach the last element.

function jumpGameShortest(nums: number[]): number {
    let reachableIndex = 0;
    let length = 0;

    for (let i = 0; i < nums.length; i++) {
        // console.log('i: ', i);
        if (i > reachableIndex) {
            return -1; // hole, we cannot go further.
        }

        const nextIndex = i + nums[i];
        if (nextIndex > reachableIndex) {
            reachableIndex = nextIndex;
            length++;

            // console.log('nextIndex: ', nextIndex);
            // console.log('reachableIndex: ', reachableIndex);    

            if (reachableIndex >= nums.length - 1) {
                break;
            }
        }
    }

    return length;
}

const arr = [1,2,3,0,0,1,0];
const arr2 = [2,2,0,1];
const arr3 = [2,1,0,1];

console.log('arr1: ', arr);
console.log('length: ', jumpGameShortest(arr));
console.log('arr2: ', arr2);
console.log('length: ', jumpGameShortest(arr2));
console.log('arr3: ', arr3);
console.log('length: ', jumpGameShortest(arr3));