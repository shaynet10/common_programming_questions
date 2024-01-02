function getLetters(digit: string): string[] {
    const lettersByDigit: { [key: string]: string[] } = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q','r', 's'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z'],
    };
    if (!lettersByDigit[digit]) {
        throw new Error('unsupported');
    }
    return lettersByDigit[digit];
}


function letterCombinationOfPhoneNumber(digits: string): string[] { // O(digits.length * letters.length)
    let combinations: string[] = [];

    let letters = getLetters(digits.charAt(0)); // 2 -> a,b,c
    letters.forEach(letter => combinations.push(letter));

    for (let i = 1; i < digits.length; i++) {
        const combinationBefore = [...combinations];
        combinations = [];
        letters = getLetters(digits[1]); // 2 -> d,e,f
        letters.forEach(letter => {
            combinationBefore.forEach(combination => {
                const newCombination = `${letter}${combination}`;
                combinations.push(newCombination);
            });
        });    
    }

    return combinations;
}


['23'].forEach(digits => {
    console.log('digits: ', digits);
    console.log('combinations: ', letterCombinationOfPhoneNumber(digits));
});