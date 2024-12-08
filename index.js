// array.reduce(callbackFn, initialValue);


// Summing an array of numbers
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); 

// The reduce function starts with 0 as the initial value.
// For each iteration, accumulator starts as 0 and gets updated with the sum of itself and the current value.
// Iteration sequence: 0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10, 10 + 5 = 15