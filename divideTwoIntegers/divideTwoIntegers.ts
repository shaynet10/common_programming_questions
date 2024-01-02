// Given 2 ints a and b
// Return a/b without using * or / 
function divideTwoIntegers(a: number, b: number): number {
    let i = 0;
    while (a - b > 0) {
        a = a - b;
        i++;
    } 
    return i;
}

[
    [100, 3],
    [10000, 3],
    [100000000, 3],
].forEach(numbers => {
    console.log('numbers: ', numbers);
    console.log('result: ', divideTwoIntegers(numbers[0], numbers[1]));
});