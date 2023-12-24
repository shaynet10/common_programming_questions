// Should get/set in O(1)
// get returns random value from the values that were set.

class randomizedSet {
    numbers: Set<number>;

    constructor() {
        this.numbers = new Set();
    }

    insert(num: number): boolean {
        if (this.numbers.has(num)) {
            return false;
        }
        this.numbers.add(num);
        return true;
    }

    remove(num: number): boolean {
        if (!this.numbers.has(num)) {
            return false;
        }
        this.numbers.delete(num);
        return true;
    }

    get(): number {
        const min = 0;
        const max = this.numbers.size;
        if (max >= 0) {
            const randomIndex = Math.floor(Math.random() * (max - min) + min);
            let index = -1;
            for (const value of this.numbers) { // We don't convert from set to array, since it takes O(n).
                index++;
                if (index === randomIndex) {
                    return value;
                }
            }    
        }
        return -1;
      }
}

const set = new randomizedSet();
console.log('add 2: ', set.insert(2));
console.log('add 1: ', set.insert(1));
console.log('add 3: ', set.insert(3));
console.log('get', set.get());
console.log('get', set.get());
console.log('get', set.get());
console.log('get', set.get());
console.log('add 1: ', set.insert(1));
console.log('remove 1: ', set.remove(1));
console.log('get', set.get());
console.log('get', set.get());
console.log('get', set.get());
console.log('remove 3: ', set.remove(3));
console.log('get', set.get());
console.log('get', set.get());
console.log('add 1: ', set.insert(1));
console.log('add 3: ', set.insert(3));
console.log('get', set.get());
console.log('get', set.get());
console.log('get', set.get());
console.log('get', set.get());
console.log('get', set.get());

