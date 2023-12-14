function rotateLeft(array, amount) {
    for (let i = 0; i < amount; i++) {
        const element = array.pop();
        array.unshift(element);
    }
    return array;
}

function rotateRight(array, amount) {
    for (let i = 0; i < amount; i++) {
        const element = array.shift();
        array.push(element);
    }
    return array;
}

const arr =  [1,2,3,4,5,6,7,8,9];

console.log('array: ', arr);
console.log('rotated left 3: ', rotateLeft(arr, 3));
console.log('rotated right 3: ', rotateRight(arr, 3));
console.log('rotated right 1: ', rotateRight(arr, 1));