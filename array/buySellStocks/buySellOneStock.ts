// Should find one day to buy 
// And aonther day to sell
// to return the max profit.
// O(n)
function buySellOneStock(prices: number[]): { profit: number, buyIndex: number, sellIndex: number } {
    let buyPrice = prices[0];
    let buyIndex = 0;
    let sellIndex = 0;
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < buyPrice) {
            buyPrice = prices[i];
            buyIndex = i;
        }
        if (prices[i] - buyPrice > profit) {
            profit = prices[i] - buyPrice;
            sellIndex = i;
        }
    }
    return { profit, buyIndex, sellIndex };
}

const prices = [1,2,3,4,5,6,7,3,2,5,9];
console.log(`prices: ${prices}`);
console.log(`maxProfit: ${JSON.stringify(buySellOneStock(prices))}`);