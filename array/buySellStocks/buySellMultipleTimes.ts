// Should find max profit
// We can buy and sell on the same day.
// Profit is sum of multiple profits.

function getMaxProfitMultipleTimes(nums: number[]): number {
    let profit = 0;
    for (let i = 1; i < nums.length; i++) {
        const currentProfit = nums[i] - nums[i-1];
        if (currentProfit > 0) {
            profit += currentProfit;
        }
    }
    return profit;
}

const prices = [1,2,3,6,9,3,9,10];
const profit = getMaxProfitMultipleTimes(prices);
console.log('prices: ', prices);
console.log('profit: ', profit); // Expected to be: 15