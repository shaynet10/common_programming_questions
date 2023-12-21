// sort list according to most visited - least visited
// element is visited pull it out add to the top
// element is added from the top, oldest is removed from bottom.
// 
// in order to access fast, save also HashMap of values.
// key =  the value , value its location on the array.
// 
// element changes its position, update also the hashMap.

class LRUCache {
    capacity: number;
    curCapacity: number;
    keysByDate: number[];
    data: Map<number, number>;

    constructor (capacity: number) {
        this.capacity = capacity;
        this.keysByDate = [];
        this.curCapacity = 0;
        this.data = new Map();
    }

    findAndDelete(key: number) {
        for (let i = 0; i < this.keysByDate.length; i++) {
            if (this.keysByDate[i] === key) {
                this.keysByDate.splice(i, 1);
            }
        }
    }

    get(key: number) {
        console.log(`get: ${key}`);
        if (this.data.has(key)) {
            const value = this.data.get(key);
            this.findAndDelete(key);
            this.keysByDate.push(key);
            return value;
        } else {
            return -1;
        }
    }

    set(key: number, value: number) {
        console.log(`set: ${key}: ${value}`);
        this.data.set(key, value);
        this.curCapacity++;
        if (this.curCapacity > this.capacity) {
            // remove least visited from the bottom.
            const deleted: number = Number(this.keysByDate.shift());
            console.log('delete: ', deleted);
            this.data.delete(deleted);
        }
        this.keysByDate.push(key);
    }
}

const LRU = new LRUCache(3);

LRU.set(1, 10);
console.log(LRU.keysByDate);

LRU.set(2, 20);
console.log(LRU.keysByDate);

LRU.set(3, 30);
console.log(LRU.keysByDate);

LRU.set(4, 40);
console.log(LRU.keysByDate);

LRU.get(2);
console.log(LRU.keysByDate);

LRU.set(5, 50);
console.log(LRU.keysByDate);

const notFoundOld = LRU.get(1);
console.log(LRU.data);
console.log('old 1', LRU.get(1));
console.log('new 4', LRU.get(4));
console.log('old 3', LRU.get(3));
console.log('2', LRU.get(2));
