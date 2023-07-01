// **Question 3**
// Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.
// **Example 1:**
// **Input:** nums = [-4,-1,0,3,10]
// **Output:** [0,1,9,16,100]
// **Explanation:** After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].


const nums = [-4,-1,0,3,10];
function sqrTheArray(nums){
    let result = [];
    for(let i=0; i<nums.length; i++){
        let a = nums[i]*nums[i];
        result.push(a);
    }
    result.sort((a, b) => (a-b));
    return result;
}
let b = sqrTheArray(nums);
console.log(b)







// function sortedSquares(nums) {
//     const squaredNums = nums.map(num => num * num);
//     squaredNums.sort((a, b) => a - b);
//     return squaredNums;
// }
// const nums = [-4, -1, 0, 3, 10];
// const result = sortedSquares(nums);
// console.log(result); // Output: [0, 1, 9, 16, 100]










// function sortedSquares(nums) {
//     const result = [];

//     for (let i = 0; i < nums.length; i++) {
//         const square = nums[i] * nums[i];
//         result.push(square);
//     }
//     result.sort((a, b) => a - b);
//     return result;
// }

// // Example usage
// const nums = [-4, -1, 0, 3, 10];
// const result = sortedSquares(nums);
// console.log(result);







// function sortedSquares(nums) {
//     const result = [];
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         const leftSquare = nums[left] * nums[left];
//         const rightSquare = nums[right] * nums[right];

//         if (leftSquare > rightSquare) {
//             result.unshift(leftSquare);
//             left++;
//         } else {
//             result.unshift(rightSquare);
//             right--;
//         }
//     }

//     return result;
// }

// // Example usage
// const nums = [-4, -1, 0, 3, 10];
// const result = sortedSquares(nums);
// console.log(result);
