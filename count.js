const fruits = ['apple', 'banana', 'cherry', 'date', "apple", "banana", "apple", "apple", "banana", "cherry", "date", "date", "date", "date", "date", "date"];

// reduce method iterates over each element in the array and builds a new object. accumulator (acc) is an object that keeps track of the count of each fruit.
// The initial value of acc is an empty object.
// The callback function takes two arguments: accumulator and current fruit. It updates the accumulator's count of the current fruit.
// Checlks if the fruit is already in the accumulator, and if not, adds it with a count of 1.
const fruitsCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(fruitsCount);