function sortRGB(array: string[]): string[] {
    let amountR = 0;
    let amountB = 0;
    let amountG = 0;
    const result: string[] = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'R') {
            amountR++;
        } else if (array[i] === 'G') {
            amountG++;
        } else if (array[i] === 'B') {
            amountB++;
        }
    }

    for (let i=0; i<=amountR; i++) {
        result.push('R');
    }
    for (let i=0; i<=amountG; i++) {
        result.push('G');
    }
    for (let i=0; i<=amountB; i++) {
        result.push('B');
    }

    return result;
}

[
    ['G','R','B','R','R','B','R','G','B','R','R','B','B','B','G','G','G'],
].forEach(arr => {
    console.log('array: ', arr);
    console.log('results: ', sortRGB(arr));
});