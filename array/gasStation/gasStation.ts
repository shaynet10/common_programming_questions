// Given 2 arrays:
// cost = how much gas is taken when leaving this station
// gas = how much is added when ariving to this station
// move[i+1] = gas before - cost[i] + gas[i+1]
// move from last element[n-1] to element[0]
// Need to find index, where after moving the entire array, 
// we get to that index again.

function gasStation(gas: number[], cost: number[]): number {
    const gasMinusCost: number[] = [];
    const earned: number[] = [];
    let totalGas = 0;
    
    // if totalGas < 0, 
    // it means that we reached to a point
    // Where the cost > the gas amount.
    for (let i = 0; i < gas.length; i++) {
        const currentSum = gas[i] - cost[i];
        totalGas += currentSum;
        gasMinusCost.push(currentSum);
    }
    if (totalGas < 0) {
        return -1;
    }

    // cost <= gas amount.
    // we want to find the min gasMinusCost,
    // Since it's a hole where we can start,
    // And we don't want to enter into.
    let startIndex = 0;
    let minSum = gasMinusCost[0];
    for (let i = 1; i < gas.length; i++) {
        if (minSum + gasMinusCost[i] < 0 || gas[startIndex] < 0) {
            startIndex = i;
            minSum = gasMinusCost[i];
        } else {
            minSum += gasMinusCost[i];
        }
    }
    
    return startIndex;
}

const gas = [1,2,3,4,5];
const cost = [3,4,5,1,2];
console.log('gas: ', gas);
console.log('cost: ', cost);
console.log('gas station: ', gasStation(gas, cost));