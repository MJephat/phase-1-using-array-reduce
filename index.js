const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// const totalBatteries = 0;

// const result = batteryBatches.reduce((acc, both)=>acc + both,
// totalBatteries
// );

// console.log(result);

const totalBatteries = batteryBatches.reduce(
    (accumulator,currentValue) => accumulator + currentValue,
    0
);

console.log(totalBatteries);