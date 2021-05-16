class Rotation {
    clone(array) {
        return JSON.parse(JSON.stringify(array));
    }

    // 3 4 5 1 2
    // 5
    // first find first value ( x --> left > x && right > x )
    // second log n to find value
    searchInRotated(array, value) {
        const firstIndex = this.getFirstIndexOfRotated(array);
        const firstElement = array[firstIndex];
        if (value === firstElement) return true;
        if (value < firstElement) return false;
        if (value <= array[array.length - 1]) return this.binarySearch(array, firstIndex + 1, array.length - 1, value);
        if (value > array[0]) return this.binarySearch(array, 0, firstIndex, value);
    }


    // 4 5 6 1 2 3
    // L       R 
    getFirstIndexOfRotated(array) {
        let _right = array.length - 1;
        let _left = 0;
        while (_left < _right) {
            let guess = (_left + _right) / 2;
            if ((array[guess - 1] > array[guess]) &&
                (array[guess + 1] > array[guess])) { 
                return guess;
            }

            if (array[guess] > array[_left]) {
                _left = guess;
            } else if (array[guess] < array[_right]) {
                _right = guess;
            }
        }
        return -1;
    }


    // 1 2 3 4 5 6 7 
    // 
    binarySearch(array, left, right, value) {
        let _right = right;
        let _left = left;
        while (_left < _right) {
            if (array[_right] === value) return _right;
            if (array[_left] === value) return _left;
            let guess = (_left + _right) / 2;
            if (array[guess] === value) return guess;
            if (array[guess] < value) {
                _left = guess;
            } else {
                _right = guess;
            }
        }
        return -1;
    }

    rotate(array, amount, from) {
        const _array = this.clone(array);
        for (let i=0; i < amount; i++) {
            if (from === "start") {
                this.rotateOneFromStart(_array);
            } else {
                this.rotateOneFromEnd(_array);
            }
        }
        return _array;
    }

    rotateOneFromStart(array) {
        const digit = array.shift();
        array.push(digit);
    }

    rotateOneFromEnd(array) {
        const digit = array.pop();
        array.unshift(digit);
    }
}

module.exports = Rotation;