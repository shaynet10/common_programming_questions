// If we get to the end of the array with count = 1, it's a candidate.
// If count > 0 from iterating the entire array, it's a candidate.
function getCadidateIndex(nums: number[]): number {
    let candidateIndex = 0;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[candidateIndex]) {
            count++;
        } else {
            count--;
        }

        // count = 0, we find another candidate.
        if (count === 0) {
            candidateIndex = i;
            count = 1;
        }
    }
    return candidateIndex;
}

function majorityElement(nums: number[]): any {
    let count = 0;
    const candidateIndex = getCadidateIndex(nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[candidateIndex]) {
            count++;
        }
    }

    if (count > (nums.length / 2)) {
        return candidateIndex;
    }
    return -1;
};

const m = [1,2,3,4,5,5,5,4,4,4,4,4,4,4,4,4,4,4,3,3,3,2];
const indexMajority = majorityElement(m);
const elementMajority = indexMajority === -1 ? null : m[indexMajority]; 
console.log(`m: ${m}`);
console.log(`majority: m[${indexMajority}]: ${elementMajority}`);

const m2 = [1,2,3,3,3,3,2];
const indexMajority2 = majorityElement(m2);
const elementMajority2 = indexMajority2 === -1 ? null : m[indexMajority2]; 
console.log(`m: ${m2}`);
console.log(`majority: m[${indexMajority2}]: ${elementMajority2}`);