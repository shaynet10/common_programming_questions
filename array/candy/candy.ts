// n ratings 
// each element gets candy
// higher rating gets more candies than its neighbors.
// return min num of candies to give.
// input: ratings = [1,0,2]
// output: 5
// each of them get 1 ( so we have 3)
// ratings[0] > ratings[1] --> child[0] = child[0] + 1 = 2;
// ratings[1] < ratings[0] --> child[1] = child[1] = 1;
// ratings[2] > ratings[1] --> child[2] = child[2] + 1 = 2;
//  2 + 1 + 2 = 5

function getCandiesAmount(ratings: number[]): number {
    const amounts: number[] = [];
    for (let i = 0; i < ratings.length; i++) {
        let candiesAmount = 1; // Everybody gets 1
        if (i === 0) {
            if (ratings[i] > ratings[i+1]) {
                candiesAmount++;
            }
        } else if (i === ratings.length - 1) {
            if (ratings[i] > ratings[i-1]) {
                candiesAmount++;
            }
        } else {
            if (ratings[i] > ratings[i-1] || ratings[i] > ratings[i+1]) {
                candiesAmount++;
            }
        }
        amounts.push(candiesAmount);
    }

    let amount = 0;
    amounts.forEach(curAmount => amount += curAmount);
    return amount;
}

const ratings = [1,0,2];
console.log('ratings: ', ratings);
console.log('candies: ', getCandiesAmount(ratings));

const ratings2 = [1,2,2];
console.log('ratings2: ', ratings2);
console.log('candies2: ', getCandiesAmount(ratings2));