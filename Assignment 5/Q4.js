// function findMissingNumbers(nums1, nums2) {
//     const distinctNums1 = new Set(nums1);
//     const distinctNums2 = new Set(nums2);

//     const missingNums1 = [];
//     const missingNums2 = [];

//     for (const num of distinctNums1) {
//         if (!distinctNums2.has(num)) {
//             missingNums1.push(num);
//         }
//     }

//     for (const num of distinctNums2) {
//         if (!distinctNums1.has(num)) {
//             missingNums2.push(num);
//         }
//     }

//     return [missingNums1, missingNums2];
// }

// // Example usage
// const nums1 = [1, 2, 3];
// const nums2 = [2, 4, 6];

// const result = findMissingNumbers(nums1, nums2);
// console.log(result);






// function findDistinctElements(nums1, nums2) {
//     const notInNums2 = [];
//     const notInNums1 = [];

//     // Helper function to find distinct elements not present in an array
//     function findDistinct(arr1, arr2, notInArray) {
//         for (const num of arr1) {
//             if (!arr2.includes(num) && !notInArray.includes(num)) {
//                 notInArray.push(num);
//             }
//         }
//     }

//     findDistinct(nums1, nums2, notInNums2);
//     findDistinct(nums2, nums1, notInNums1);

//     return [notInNums1, notInNums2];
// }

// // Test example
// const nums1 = [1, 2, 3];
// const nums2 = [2, 4, 6];
// const result = findDistinctElements(nums1, nums2);
// console.log(result); // Output: [[1, 3], [4, 6]]





// function findMissingDistinct(nums1, nums2) {
//     const distinctNums1 = new Set(nums1.filter(num => !nums2.includes(num)));
//     const distinctNums2 = new Set(nums2.filter(num => !nums1.includes(num)));
    
//     return [[...distinctNums1], [...distinctNums2]];
//   }
  
//   // Example usage:
//   const nums1 = [1, 2, 3];
//   const nums2 = [2, 4, 6];
//   const answer = findMissingDistinct(nums1, nums2);
//   console.log(answer);
  