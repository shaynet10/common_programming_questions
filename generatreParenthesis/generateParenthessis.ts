function generateParenthesis(n: number): string[] {
    if (n === 1) {
        return ['()'];
    } else {
        const previous = generateParenthesis(n - 1);
        const current: string[] = [];
        previous.forEach(val => {
            const right = `()${val}`;
            const left = `${val}()`;
            const surround = `(${val})`;
            current.push(right);
            if (right !== left) {
                current.push(left);
            }
            current.push(surround);
        });
        return current;
    }
}

const n = 4;
console.log('n: ', n);
console.log('prenthesis: ', generateParenthesis(n));