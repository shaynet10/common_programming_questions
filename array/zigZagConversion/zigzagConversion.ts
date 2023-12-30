function initWithSpaces(emptyArray: string[], size: number): void {
    for (let i = 0; i < size; i++) {
        emptyArray.push(' ');
    }
}

function getStringFromMatrix(matrix: string[][]) {
    let outputString = '';
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        const rowArray = matrix[rowIndex];
        for (let colIndex = 0; colIndex < rowArray.length; colIndex++ ) {
            if (matrix[rowIndex][colIndex] !== ' ') {
                outputString = outputString + matrix[rowIndex][colIndex];
            }
        }
    }
    return outputString;
}

function zigzag(inputString: string, rows: number): string {
    const matrix: string[][] = [];
    let rowIndex = 0;
    let colIndex = 0;
    let shouldZigZag = false;

    for (let i = 0; i < rows; i++) { // Get matrix of spaces (n * rows)
        matrix.push([]);
        initWithSpaces(matrix[i], inputString.length);
    }
    for (let stringIndex = 0; stringIndex < inputString.length; stringIndex++) {
        matrix[rowIndex][colIndex] = inputString[stringIndex];
        if (shouldZigZag) { // ZigZag
            rowIndex--;
            colIndex++;
            if (rowIndex  === 0) { // Top.
                shouldZigZag = false;
            }
        } else if (rowIndex < rows) { // Down.
            rowIndex++;
            if (rowIndex === rows - 1) { // Button.
                shouldZigZag = true;
            }
        }
    }
    return getStringFromMatrix(matrix);
}

const str = 'PAYPALISHIRING';
const strBasic = 'A';
console.log('str basic: ', strBasic);
console.log('zigzag(1) str basic: ', zigzag(strBasic, 1));
console.log('str: ', str);
console.log('zigzag(3): ', zigzag(str, 3));
console.log('str: ', str);
console.log('zigzag(4): ', zigzag(str, 4));
console.log('str: ', str);
console.log('zigzag(5): ', zigzag(str, 5));