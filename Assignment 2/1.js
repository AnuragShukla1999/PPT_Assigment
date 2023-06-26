// Q1.** Given an array of integers nums and an integer target, return indices of the two numbers 
// such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element 
// twice. You can return the answer in any order.

// **Example:**
// Input: nums = [2,7,11,15], target = 9
// Output0 [0,1]

// **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]

function twoSum(nums, target) {
    let ans = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                ans.push(i, j);
            }
        }
    }
    return ans;
}

let arr = [2, 3, 7, 15, 5, 0];
let target = 5;

console.log(twoSum(arr, target));