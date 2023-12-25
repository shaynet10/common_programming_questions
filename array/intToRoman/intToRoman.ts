function intToRoman(num: number): string {
    const arr: string[] = [];
    while (num > 0) {
        if (num - 1000 >= 0) {
            arr.push('M'); 
            num -= 1000;
        } else if (num - 900 >= 0) {
            arr.push('C');           
            arr.push('M'); 
            num -= 900;          
        } else if (num - 500 >= 0) {
            arr.push('D');
            num -= 500;
        } else if (num - 400 >= 0) {
            arr.push('C');
            arr.push('D');
            num -= 400;
        } else if (num - 100 >= 0) {
            arr.push('C');
            num -= 100;
        } else if (num - 90 >= 0) {
            arr.push('X');
            arr.push('C');
            num -= 90;
        } else if (num - 50 >= 0) {
            arr.push('L');
            num -= 50;
        } else if (num - 40 >= 0) {
            arr.push('X');
            arr.push('L');
            num -= 40;
        } else if (num - 10 >= 0) {
            arr.push('X');
            num -= 10;
        } else if (num - 9 >= 0) {
            arr.push('I');
            arr.push('X');
            num -= 9;
        } else if (num - 5 >= 0) {
            arr.push('V');
            num -= 5;
        } else if (num - 4 >= 0) {
            arr.push('I');
            arr.push('V');
            num -= 4;
        } else if (num - 1 >= 0) {
            arr.push('I');
            num -= 1;
        }

    }
    return arr.join("");
}

const num1 = 3;
console.log('num1: ', num1);
console.log('string1: ', intToRoman(num1));

const num2 = 58;
console.log('num2: ', num2);
console.log('string2: ', intToRoman(num2));

const num3 = 1994;
console.log('num3: ', num3);
console.log('string3: ', intToRoman(num3));

