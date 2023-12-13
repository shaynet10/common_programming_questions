function majorityElement(nums: number[]): any {
    const amounts: { [key: string]: number } = {};
    const majority = {
        num: 0,
        amount: 0,
    };
    nums.forEach(num => {
        if (!amounts[num]) {
            amounts[num] = 0;
        }
        amounts[num]++;
    });
    for (let num in amounts) {
        if (majority.amount < amounts[num]) {
            majority.amount = amounts[num];
            majority.num = Number(num);
        }
    }
    return majority.num;
};

const m = [1,2,3,4,5,5,5,4,4,4,4,4,4,4,4,4,4,4,3,3,3,2];
console.log(majorityElement(m));