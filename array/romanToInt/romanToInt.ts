function romanToInt(romanString: string): number {
    let amount = 0;
    for (let i = 0; i < romanString.length; i++) {
        const char = romanString.charAt(i);
        const charNext = i < romanString.length - 1 ? romanString.charAt(i+1) : null;

        if (char === 'I') {
            if (charNext === 'X' || charNext === 'V') {
                amount -= 1;
            } else {
                amount += 1;
            }
        } else if (char === 'V') {
            amount += 5;
        } else if (char === 'X') {
            if (charNext === 'C' || charNext === 'L') {
                amount -= 10;
            } else {
                amount += 10;
            }
        } else if (char === 'L') {
            amount += 50;
        } else if (char === 'C') {
            if (charNext === 'M' || charNext === 'D') {
                amount -= 100;
            } else {
                amount += 100;
            }
        } else if (char === 'D') {
            amount += 500;
        } else if (char === 'M') {
            amount += 1000;
        }
    }
    return amount;
}

const s1 = 'III';
console.log('string: ', s1);
console.log('amount: ', romanToInt(s1));

const s2 = 'LVIII';
console.log('string: ', s2);
console.log('amount: ', romanToInt(s2));

const s3 = 'MCMXCIV';
console.log('string: ', s3);
console.log('amount: ', romanToInt(s3));