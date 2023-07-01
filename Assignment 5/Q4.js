 function findMissingNumbers(nums1, nums2) {
     const distinctNums1 = new Set(nums1);
     const distinctNums2 = new Set(nums2);

     const missingNums1 = [];
     const missingNums2 = [];

     for (const num of distinctNums1) {
         if (!distinctNums2.has(num)) {
             missingNums1.push(num);
         }
     }

     for (const num of distinctNums2) {
         if (!distinctNums1.has(num)) {
             missingNums2.push(num);
         }
     }

     return [missingNums1, missingNums2];
 }

// // Example usage
 const nums1 = [1, 2, 3];
 const nums2 = [2, 4, 6];

 const result = findMissingNumbers(nums1, nums2);
 console.log(result);

//   const nums1 = [1, 2, 3];
//   const nums2 = [2, 4, 6];
//   const answer = findMissingDistinct(nums1, nums2);
//   console.log(answer);
  
