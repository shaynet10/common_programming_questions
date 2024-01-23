// set
// get 
// setAll

class NewSet {
  s: any;
  defaultValue: number;
  keysNewSet: number[];
  
  constructor() {
    this.s = {};
    this.keysNewSet: Set<number> = new Set();
    this.defaultValue = 0;
  }

  set(key: number, value: number): void {
    this.s[key] = value;
    this.keysNewSet.push(key);
  }

  get(key: number): number {
    if (this.s[key]) {
        return this.s[key];
    } else {
        if (this.keysNewSet.has(key)) {
            return this.defaultValue;
        } else {
            return -1;
        }
    }
  }

  setAll(value: number): void {
    // Object.keys(this.s).forEach(key => {
    //     this.s[key] = value;
    // });

    this.defaultValue = value;
    this.s = {};
  }
}


const s = new NewSet();
s.set(1, 1)
s.set(2, 2)
s.set(3, 3)
console.log(s.get(3));


