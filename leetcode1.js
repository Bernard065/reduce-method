/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
    // Iniatialize accumulator value to the initial value
    let val = init;

    // Iterate over the array
    for (let i = 0; i < nums.length; i++) {
        // Apply the reducer function to update the accumulator value
        val = fn(val, nums[i])
    }

    return val;


};

// Test cases
console.log(reduce([1, 2, 3, 4, 5], (acc, num) => acc + num, 0)); // Output: 15
console.log(reduce([1, 2, 3, 4, 5], (acc, num) => acc * num, 1)); // Output: 120
console.log(reduce([1, 2, 3, 4, 5], (acc, num) => acc - num, 10)); // Output: -45
console.log(reduce([1, 2, 3, 4, 5], (acc, num) => acc / num, 120)); // Output: 1.0000000000000002
