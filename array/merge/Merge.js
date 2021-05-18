class Merge {
    mergeSortedArrays(array1, array2) {
        let results = [];
        let array2Index = 0;
        for (let array1Index = 0; array1Index < array1.length; array1Index++) {
            while (array2[array2Index] < array1[array1Index]) {
                results.push(array2[array2Index]);
                array2Index++;
                if (array2Index >= array2.length) {
                    break;
                }
            }
            results.push(array1[array1Index]);
        }
        while (array2Index < array2.length) {
            results.push(array2[array2Index]);
            array2Index++;
        }
        return results;
    } 
}

module.exports = Merge;