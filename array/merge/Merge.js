class Merge {
    // Left & Right are sorted, merge the results.
    merge(left, right) {
        const results = [];
        let leftIndex = 0;
        let rightIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                results.push(left[leftIndex]);
                leftIndex += 1;
            } else {
                results.push(right[rightIndex]);
                rightIndex += 1;
            }
        }

        for (let leftRemainingsIndex = leftIndex; leftRemainingsIndex < left.length; leftRemainingsIndex += 1) {
            results.push(left[leftRemainingsIndex]);
        } 
        for (let rightRemainingsIndex = rightIndex; rightRemainingsIndex < right.length; rightRemainingsIndex += 1) {
            results.push(right[rightRemainingsIndex]);
        } 
        return results;
    }


    mergeSort(array) {
        if (array.length <= 1) {
            return array; // Sorted.
        }
        const middle = Math.round(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle); 
        const leftSorted = this.mergeSort(left);
        const rightSorted = this.mergeSort(right);
        return this.merge(leftSorted, rightSorted);
    }
}

module.exports = Merge;