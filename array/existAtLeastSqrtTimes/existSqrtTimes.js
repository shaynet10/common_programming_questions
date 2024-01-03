// Given array of numbers.
// Return values that exist at least sqrt(n) times.
// Example: [5,4,5,6,7,5,4,3,4] 
// Return: 5  and 4 since they exist 3 times. sqrt(9) = 3.
function existSqrtTimesO_NLogN(array) {
    const sqrtLength = Math.round(Math.sqrt(array.length));
    const returnNumbers = new Set();
    array.sort();
    let currentAmount = 1;
    let lastElement = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] === lastElement) {
            currentAmount++;
            if (currentAmount >= sqrtLength) {
                returnNumbers.add(lastElement);
            }
        } else {
            lastElement = array[i];
            currentAmount = 1;
        }
    }

    return [...returnNumbers];
}

function existSqrtTimesO_1(array) {
    const sqrtLength = Math.round(Math.sqrt(array.length));
    const amountBucket = {};
    const amounts = [];
    for (let i = 0; i < array.length; i++) {
        const key = array[i];
        if (! amountBucket[key]) {
            amountBucket[key] = 1;
        } else {
            amountBucket[key]++;
        }
    }

    Object.keys(amountBucket).forEach(numberStr => {
        if (amountBucket[numberStr] >= sqrtLength) {
            amounts.push(Number(numberStr));
        }
    });
    return amounts;
}


[
    [5,4,5,6,7,5,4,3,4],
].forEach(arr => {
    console.log('array: ', arr);
    console.log('exist(NLONG): ', existSqrtTimesO_NLogN(arr));
    console.log('exist(1): ', existSqrtTimesO_1(arr));
});