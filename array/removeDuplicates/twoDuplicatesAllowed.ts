function removeDuplicatesWithTwoAllowed(numbers: number[]) {
    let j = 2;
    for (let i = 3; i < numbers.length; i++) {
        if (numbers[i] !== numbers[j-1] || numbers[i] !== numbers[j-2]) {
            numbers[j] = numbers[i];
            j++;
        }
    }
    for (let i = j; i < numbers.length; i++) {
        numbers[i] = 0;
    }
    return numbers;
}

const a = [1,2,2,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8,8,8,9];
console.log('before: ', a);
console.log('after: ', removeDuplicatesWithTwoAllowed(a));