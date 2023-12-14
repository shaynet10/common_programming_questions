    // 
    function binarySearch(array, value) {
        let right = array.length - 1;
        let left = 0;
        while (left < right) {
            if (array[right] === value) return right;
            if (array[left] === value) return left;
            let guess = Math.round((left + right) / 2);
            if (array[guess] === value) return guess;
            if (array[guess] < value) {
                left = guess;
            } else {
                right = guess;
            }
        }
        return -1;
    }

    const array = [1,2,3,4,5,6,7,8,9,10,11,11,13,24];

    console.log('Array: ', array);
    console.log('Binary Search 9', binarySearch(array, 9));