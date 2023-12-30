function copyWordToOutput(wordStartIndex: number, wordEndIndex: number, outputArray: string[], inputString: string): void {
    for (let i = wordEndIndex; i >= wordStartIndex; i--) {
        const char = inputString.charAt(i);
        outputArray.unshift(char);
    }
}


function reverseWords(inputString: string): string {
    const outputArray: Array<string> = [];
    let wordStartIndex = -1;
    let wordEndIndex = 0;
    let lastLetterIndex = -1;
    for (let i = 0; i < inputString.length && wordStartIndex < 0; i++) { // get start index.
        if (inputString.charAt(i) !== ' ') {
            wordStartIndex = i;
        }
    }
    for (let i = inputString.length - 1; i >= 0 && lastLetterIndex < 0; i--) { // get last letter index.
        if (inputString.charAt(i) !== ' ') {
            lastLetterIndex = i;
        }
    }

    for (let i = wordStartIndex + 1; i < inputString.length; i++) {
        if (inputString.charAt(i) === ' ') {
            if (inputString.charAt(i-1) !== ' ') {
                wordEndIndex = i - 1;
                copyWordToOutput(wordStartIndex, wordEndIndex, outputArray, inputString);
                if (wordEndIndex < lastLetterIndex) {
                    outputArray.unshift(' ');
                }
                wordStartIndex = -1;
            }
        } else if (wordStartIndex < 0) {
            wordStartIndex = i;
        }
    }

    if (wordStartIndex >= 0) { //Last word.
        copyWordToOutput(wordStartIndex, lastLetterIndex, outputArray, inputString);
    }

    return outputArray.join('');
}

const str = 'the        sky is blue';
console.log('str: ', str);
console.log('reverse words: ', reverseWords(str));

const str2 = ' hello world ';
console.log('str2: ', str2);
console.log('reverse words: ', reverseWords(str2));