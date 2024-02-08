const nums = [4, 11, 6, 15];
const target = 10;

const twoSum = function(nums, target) {
    const numMap = new Map();
    let maxMapSize = 0; // Variable to track the maximum map size
    for (let i = 0; i < nums.length; ++i) {
        const currentNum = nums[i];
        const complement = target - currentNum;
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(currentNum, i);
        
        maxMapSize = Math.max(maxMapSize, numMap.size); // Update maxMapSize
    }
    // Calculate space complexity based on the maximum map size reached
    return maxMapSize;
};

// Example usage
console.log("Output:", twoSum(nums, target));

// Calculate Time Complexity
console.time("Time Complexity");
twoSum(nums, target);
console.timeEnd("Time Complexity");

// Calculate Space Complexity
console.log("Space Complexity:", twoSum(nums, target) === nums.length ? "O(n)" : "O(1)");
