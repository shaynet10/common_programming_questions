// Given string with letters and spaces
// We need to return the length of the last word.
// Find the index of first letter from the end.
// Find the index of space from there.
// Calculate the length.

function isSpace(char: string) {
    if (char === ' ') { 
        return true;
    }
    if (char === '\t') {
        return true;
    }
    if (char === '\n') {
        return true;
    }
    if (char === '\r') {
        return true;
    }
    return false;
}

function lengthOfLastWord(text: string): number {
    let indexOfFirstLetter = -1;
    let indexOfFirstSpaceFromLetters = -1;
    for (let i = text.length - 1; i >= 0; i--) {
        if (indexOfFirstLetter < 0) {
            if (!isSpace(text[i])) {
                indexOfFirstLetter = i;
            }
        } else if (isSpace(text[i])) {
            indexOfFirstSpaceFromLetters = i;
            break;
        }
    }
    if (indexOfFirstLetter < 0 || indexOfFirstSpaceFromLetters < 0) {
        return -1;
    }

    return indexOfFirstLetter - indexOfFirstSpaceFromLetters;
}

const str = 'hi how are you';
console.log('str: ', str);
console.log('length of last word: ', lengthOfLastWord(str));

const str2 = '   fly me   to   the moon  ';
console.log('str2: ', str2);
console.log('length of last word: ', lengthOfLastWord(str2));

const str3 = 'luffy is still joyboy';
console.log('str3: ', str3);
console.log('length of last word: ', lengthOfLastWord(str3));
