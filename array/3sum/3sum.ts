// Given: array of numbers, we want to find all 3 pairs 
// Where [a,b,c] = 0

function threeSum(numbers: number[]): number[][] {
    const results: number[][] = [];
    const answered: Set<string> = new Set();
    if (numbers.length >= 3) {
        numbers.sort(); // O(nlogn)
        for (let i = 0; i < numbers.length - 2; i++) { // O(n)
            let leftIndex = i + 1;
            let rightIndex = numbers.length - 1;
            while (leftIndex < rightIndex) { // O(n times for esch i)
                const currentThreeSum = numbers[leftIndex] + numbers[rightIndex] + numbers[i];
                if (currentThreeSum < 0) {
                    leftIndex++; // Get higher sum (array is sorted low->high).
                } else if (currentThreeSum > 0) {
                    rightIndex--; // Get lower sum (array is sorted low-> high).
                } else { // We found sum.
                    const answer  = [numbers[leftIndex], numbers[rightIndex], numbers[i]];
                    if (!answered.has(answer.join('_'))) {
                        results.push(answer);
                        answered.add(answer.join('_'));
                    }
                    leftIndex++;
                    rightIndex--;
                }
            }
        }
    }
    return results;
}

[
    [-1, 0, 1, 2, -1, -4], 
    [0,0,0],
    [0,1,1],
].forEach(arr => {
    console.log('arr: ', arr);
    console.log('threeSum: ', threeSum(arr));    
});
