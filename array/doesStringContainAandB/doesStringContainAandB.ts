// Check if string contains: aaabbbbb
// abab is not allowed.
// Assuming the string can contain other chars.
// i.e. sfgdgdgdfaaaabbbdfsfd
// absdfsdab is valid.

function isAThenBSequence_On(text: string): boolean {
    for (let i = 1; i < text.length; i++) {
        if (text[i] === 'a' && text[i-1] === 'b') {
            return false;
        }
    }
    return true;
};

["sfgdgdgdfaaaabbbdfsfd", "abab"].forEach(str => {
    console.log('str: ', str);
    console.log('is aaabbb: ', isAThenBSequence_On(str));
});

// The same where 
// absdfsdfab is not valid (since a cannot be displayed after b no matter what between).
function isAThenBSequence_On_SecondEdition(text: string): boolean {
    let isBfound = false;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'b') {
            isBfound = true;
        } else if (text[i] === 'a' && isBfound) {
            return false;
        }
    }
    return true;
}

["sfgdgdgdfaaaabbbdfsfd", "sfgdgdgdfaabfsabfd", "abab"].forEach(str => {
    console.log('str: ', str);
    console.log('is aaabbb second edition: ', isAThenBSequence_On_SecondEdition(str));
});
