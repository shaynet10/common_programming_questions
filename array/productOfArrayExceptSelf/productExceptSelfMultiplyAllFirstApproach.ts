// Every cell = multiplication of all other cells besides of it.
// Approach 2: multiply all cells first. divide by cell value.
// Special cases: cell = 0
function productExceptSelf(numbers: number[]): number[] {
    const results: number[] = [];
    const zeroCells: number[] = [];
    let productOfAll = 1;;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== 0) {
            productOfAll *= numbers[i];
        } else {
            zeroCells.push(i);
        }
    }
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            if (zeroCells.length > 1) {
                results.push(0);
            } else {
                results.push(productOfAll);
            }
        } else {
            if (zeroCells.length > 0) {
                results.push(0);
            } else {
                results.push(productOfAll/numbers[i]);
            }
        }
    }

    return results;
}

const arr = [1,2,3,4,5];
console.log('arr: ', arr);
console.log('results: ', productExceptSelf(arr));

const arr2 = [1,0,3,4,5];
console.log('arr2: ', arr2);
console.log('results2: ', productExceptSelf(arr2));

const arr3 = [1,0,3,4,0];
console.log('arr3: ', arr3);
console.log('results3: ', productExceptSelf(arr3));