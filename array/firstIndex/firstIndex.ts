function firstIndex(bigString: string, smallString: string): number {
    let indexFound = -1;
    let indexSmall = 0;

    for (let i = 0; i < bigString.length; i++) {
        if (bigString[i] === smallString[indexSmall]) {
            indexSmall++;
            if (indexSmall === smallString.length) { // We found a match.
                break;
            }
            if (indexFound < 0) {
                indexFound = i;
            }
        } else { // Mismatch
            if (indexFound) {
                indexFound = -1;
                indexSmall = 0;
                if (bigString[i] === smallString[indexSmall]) { // Current matchs the start of small string.
                    indexFound = i;
                    indexSmall++;
                }
            }
        }
    }

    return indexFound;
}


const str = 'dev is good';
const substr = 'is';
console.log('str: ', str);
console.log('substr: ', substr);
console.log('firstIndex: ', firstIndex(str, substr));

const str2 = 'dev ii good';
console.log('str2: ', str2);
console.log('substr: ', substr);
console.log('firstIndex: ', firstIndex(str2, substr));

const str3 = 'dev iis good';
console.log('str3: ', str3);
console.log('substr: ', substr);
console.log('firstIndex: ', firstIndex(str3, substr));
