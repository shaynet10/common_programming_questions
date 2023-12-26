function longestCommonPrefix(strings: string[]) {
    let longestPrefix = 0;
    let shouldBreak = false;
    const shrotestStringLength = Math.min(...strings.map(str => str.length)); // O(number of strings)

    // k = shortest string length, n = number of strings O(nk)
    for (let k = 0; k < shrotestStringLength && !shouldBreak; k++) { // O(shortest string length)
        for (let i = 1; i < strings.length && !shouldBreak; i++) { // O(number of strings)
            if (strings[i][k] !== strings[i-1][k]) {
                shouldBreak = true;
            }
        }
        if (!shouldBreak) {
            longestPrefix++;
        }
    }
    return longestPrefix;
}

const strings = ['abc', 'abcd', 'abcdef'];
console.log('strings: ', strings);
console.log('longest: ', longestCommonPrefix(strings));