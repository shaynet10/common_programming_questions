// eq to numbers.filter(n => n !== excludedValue)
function filterElement(numbers: number[], excludedValue: number) {
    let j = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== excludedValue) {
            numbers[j] = numbers[i];
            j++;
        }
    }

    for (let i = j; i < numbers.length; i++) {
        numbers[i] = 0;
    }

    return numbers;
}

const a = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,4,5,6,7];
console.log('before: ', a);
console.log('after: ', filterElement(a, 2));