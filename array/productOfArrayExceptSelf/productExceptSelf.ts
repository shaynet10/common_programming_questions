// Every cell = multiplication of all other cells besides of it.
// Approach 1: calculate the product/multiplication by 2 loops
// 0->n-1 and n-1->0
function productExceptSelf(numbers: number[]): number[] {
    const results: number[] = [];
    let prefix = 1;
    let suffix = 1;

    for (let i = 0; i < numbers.length; i++) {
        results.push(prefix);
        prefix *= numbers[i];
    }
    for (let i = numbers.length - 1; i >= 0; i--) {
        results[i] *= suffix;
        suffix *= numbers[i];
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