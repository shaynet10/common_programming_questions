// We get matrix as an input.
// We should return if it's a valid or invalid soduku.
// matrixSize: for matrix 3x3 is 3.
function getCube(rowIndex: number, colIndex: number, matrixSize: number): string {
    const cubeX = Math.floor(rowIndex / matrixSize);
    const cubeY = Math.floor(colIndex / matrixSize);
    return `${cubeX}_${cubeY}`;
}

function isValidSoduku(matrix: string[][]): boolean {
    const seenInRow: { [key: string]: Set<string> } = {}; // rowIndex => valuesSeenInThatRow.
    const seenInCol: { [key: string]: Set<string> } = {}; // colIndex => valuesSeenInThatCol.
    const seenInCube: { [key: string]: Set<string> } = {}; // cubeIndex => valuesSeenInThatCube.
    const matrixSize = Math.sqrt(matrix.length); // 3x3 --> 3.
    for (let i = 0; i < matrix.length; i++) {
        seenInRow[`${i}`] = new Set();
        seenInCol[`${i}`] = new Set();
        for (let j = 0; j < matrix.length; j++) {
            seenInCube[getCube(i,j, matrixSize)] = new Set();
        }
    }

    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        const row = matrix[rowIndex];
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            

            const cell = row[colIndex];
            if (cell === '.') { // Cell is empty.
                continue;
            }
            if (seenInRow[`${rowIndex}`].has(cell)) {
                return false;
            } else if (seenInCol[`${colIndex}`].has(cell)) {
                return false;
            } else {
                const cube = getCube(rowIndex, colIndex, Math.sqrt(row.length));
                if (seenInCube[cube].has(cell)) {
                    return false;    
                } else { // Valid cell.                
                    seenInRow[`${rowIndex}`].add(cell);
                    seenInCol[`${colIndex}`].add(cell);
                    seenInCube[cube].add(cell);    
                }
            }
        }
    }
    return true;
}

const soduku1 = [['1']];
const soduku2 = [
    ['.','1','4','.'],
    ['.','3','.','2'],
    ['.','.','3','.'],
    ['.','.','.','.']
];
const soduku3 = [
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

const invalidSoduku2 = [
    ['.','1','4','.'],
    ['.','3','.','4'],
    ['.','.','3','.'],
    ['.','.','.','.']
];

const invalidSoduku3 = [
 ["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

[
    soduku1, 
    soduku2,
    soduku3,
].forEach(matrix => {
    console.log('matrix: ', matrix);
    console.log('isValidSoduku(should be true): ', isValidSoduku(matrix));
});

[
    invalidSoduku2,
    invalidSoduku3,
].forEach(matrix => {
    console.log('matrix: ', matrix);
    console.log('isValidSoduku(shold be false): ', isValidSoduku(matrix));
});
