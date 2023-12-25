// In order to calculate trap water between bars
// We perform these steps:
// 1. calculate left & right for bar
// 2. calculate trapped water for bar (max left - max right)
// 3. summerise the calculations.

function trapRainWater(height: number[]): number {
    const rightBar: number[] = Array<number>(height.length);

    let summery = 0;

    rightBar[height.length - 1] = height[height.length - 1];
    for (let rightBarIndex = height.length - 2; rightBarIndex >= 0; rightBarIndex--) {
        rightBar[rightBarIndex] = Math.max(rightBar[rightBarIndex+1], height[rightBarIndex]);
    }

    let leftBarCurrentMax = height[0];
    for (let leftBarIndex = 1; leftBarIndex < height.length; leftBarIndex++) {
        leftBarCurrentMax = Math.max(leftBarCurrentMax, height[leftBarIndex]);
        const trapped = Math.min(leftBarCurrentMax, rightBar[leftBarIndex]) - height[leftBarIndex];
        summery += trapped;
    }

    return summery;
}

const heights = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log('heights: ', heights);
console.log('trapRainWater: ', trapRainWater(heights));

const heights2 = [4,2,0,3,2,5];
console.log('heights2: ', heights2);
console.log('trapRainWater2: ', trapRainWater(heights2));