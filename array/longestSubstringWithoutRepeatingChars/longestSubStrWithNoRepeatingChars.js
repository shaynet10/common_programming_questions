// Input: pwwkew
// Output: wke
// Input: abcabcbb
// Output: abc

function longestWithoutRepeating(str) {
    let seenChars = new Set();
    let length = 0;
    for (let i = 0; i < str.length; i++) {
        if (!seenChars.has(str[i])) {
            seenChars.add(str[i]);
        } else {
            length = Math.max(seenChars.size, length);
            seenChars = new Set([ str[i] ]);
        }
    }
    return length;
}

['pwwkew', 'abcabcdefbb'].forEach(str => {
    console.log('str: ', str);
    console.log('longestWithoutRepeating: ', longestWithoutRepeating(str));
});
