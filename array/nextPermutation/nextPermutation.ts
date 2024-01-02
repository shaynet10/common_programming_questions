// Given array of nums.
// Add the next permutation to it.

function nextPermutation(nums: number[]): void {
    const digitsIndexes: { [key: number]: number } = {};
    let digitsArr = `${nums[0]}`.split('').map(str => Number(str));
    digitsArr.forEach((digit, index) => {
        digitsIndexes[digit] = index;
    });
    for (let digitIndex = digitsArr.length - 2; digitIndex >= 0; digitIndex--) {
        const digit = digitsArr[digitIndex];
        const nextDigit = digit + 1;
        if (digitsIndexes[digit + 1]) { // is next digit saved ?
            const temp = digitsArr[digitIndex];
            digitsArr[digitIndex] = digitsArr[digitsIndexes[digit + 1]];
            digitsArr[digitsIndexes[digit + 1]] = temp;
            nums.push(Number(digitsArr.join('')));
            return; // Since we need only one.
        }
    }
}

const arr = [12345];
console.log('arr: ', arr);
nextPermutation(arr);
console.log('arr2: ', arr);