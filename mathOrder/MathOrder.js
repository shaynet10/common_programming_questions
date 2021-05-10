// const pass1 = '{[()()()((())())]}[()]';
// const pass2 = '{{{}}[()()()]}';
// new Set
// { 0, 1, 2
// } 3, 4, 13
// [ 5
// ] 12
// ( 6, 8, 10
// ) 7, 9, 11

// 3 tests
// every openning has closure afterwards (mark/remove tested values)
// [] are located between { and }
// () are located between []

class MathOrder {
    valuesInMap(array) {
        const values = new Map();
        array.forEach((value, index) => {
            if (!values.has(value)) {
                values.set(value, []);
            }
            values.get(value).push(index);
        });
        return values;
    }

    areClosed(start, end, values) {
        const startIndexes = values.get(start);
        const endIndexes = values.get(end);
        if (startIndexes.length !== endIndexes.length) return false;
        for (let i = 0; i < startIndexes.length; i++) {
            if (startIndexes[i] > endIndexes[i]) return false;
        }
        return true;
    }

    areAllBigger(baseValue, array) {
        return array.every((val) => val > baseValue);
    }

    areAllSmaller(baseValue, array) {
        return array.every((val) => val < baseValue);
    }

    areBetween(start, end, beforeStart, afterEnd, values) {
        const startIndexes = values.get(start);
        const beforeIndexes = values.get(beforeStart);
        const foundBefore = beforeIndexes.find((before) => this.areAllBigger(before, startIndexes));
        if (foundBefore === null || foundBefore === undefined) return false;

        const endIndexes = values.get(end);
        const afterIndexes = values.get(afterEnd);
        const foundAfter = afterIndexes.find((after) => this.areAllSmaller(after, endIndexes));
        if (foundAfter === null || foundAfter === undefined) return false;

        return true;
    }

    isOrdered(stringArray) {
        const array = stringArray.split("");
        const values = this.valuesInMap(array);
        if (!this.areClosed('(', ')', values)) return false;
        if (!this.areClosed('[', ']', values)) return false;
        if (!this.areClosed('{', '}', values)) return false;
        if (!this.areBetween('(', ')', '[', ']', values)) return false;
        if (!this.areBetween('[', ']', '{', '}', values)) return false;

        return true;
    }
}

module.exports = MathOrder;