// input: [4,2,6]
// output: 2 
// since we have at least 2 cells with values >= 2
// we don't have 3 cells with values >= 3
// input: [4,2,3,3]
// output: 3
// since we have at least 3 cells with values >= 3

const amounts: { [key: string]: number } = {};

function addToAmounts(index: number): void {
    if (!amounts[index]) {
        amounts[index] = 1;
    } else {
        amounts[index] += 1;
    }
}

function hIndex(citations: number[]): number {
    const citationsLength = citations.length;

    for (let i = 0; i < citationsLength; i++) {
        if (citations[i] > citationsLength) {
                addToAmounts(citationsLength);
        } else {
                addToAmounts(citations[i]);
        }
    }

    let curAmounts = 0;
    for (let i = citationsLength; i > 0; i--) {
        curAmounts += amounts[i];
        if (curAmounts >= i) {
            return i;
        }
    }
    return -1;
}

const arr = [4,2,6];
const arr2 = [4,2,3,3];
const arr3 = [4,2,3,3,5,6,7];

console.log('arr: ', arr);
console.log('hIndex: ', hIndex(arr)); // Expected: 2
console.log('arr2: ', arr2);
console.log('hIndex: ', hIndex(arr2)); // Expected: 3
console.log('arr3: ', arr3);
console.log('hIndex: ', hIndex(arr3)); // Expected: 4