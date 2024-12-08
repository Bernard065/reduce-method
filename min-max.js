const nums = [3, 7, 2, 8, 1, 5, 9, 6];
const max = nums.reduce((acc, num) => (num > acc ? num : acc), -Infinity);
console.log(max);