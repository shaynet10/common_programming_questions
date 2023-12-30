function isPalindrom(text: string): boolean {
    let leftIndex = 0;
    let rightIndex = text.length - 1;
    while (leftIndex < rightIndex) {
        if (text[leftIndex] !== text[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    return true;
}

['abcba', 'aaa', 'aa', 'abcc', ''].forEach(str => {
    console.log('str: ', str);
    console.log('is palindrom: ', isPalindrom(str));
});