const removeDuplicates = function(nums) {
    let k = 0;
    for (const x of nums) {
        if (k === 0 || x !== nums[k - 1]) {
            nums[k++] = x;
        }
    }
    return k;
};

// Example 1 input
let nums = [1, 1, 2];

// Call the function
let resultLength = removeDuplicates(nums);

// Display the output
console.log("Output:", resultLength, ", nums =", nums.slice(0, resultLength));