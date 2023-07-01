// function distanceValue(arr1, arr2, d) {
//     let count = 0;
  
//     for (let i = 0; i < arr1.length; i++) {
//       let isValid = true;
//       for (let j = 0; j < arr2.length; j++) {
//         if (Math.abs(arr1[i] - arr2[j]) <= d) {
//           isValid = false;
//           break;
//         }
//       }
//       if (isValid) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   // Example usage:
//   const arr1 = [4, 5, 8];
//   const arr2 = [10, 9, 1, 8];
//   const d = 2;
//   const result = distanceValue(arr1, arr2, d);
//   console.log(result); // Output: 2
  






function distanceValue(arr1, arr2, d) {
    let distance = 0;
  
    for (let i = 0; i < arr1.length; i++) {
      let valid = true;
  
      for (let j = 0; j < arr2.length; j++) {
        if (Math.abs(arr1[i] - arr2[j]) <= d) {
          valid = false;
          break;
        }
      }
  
      if (valid) {
        distance++;
      }
    }
  
    return distance;
  }
  
  // Example 1
  const arr1 = [4, 5, 8];
  const arr2 = [10, 9, 1, 8];
  const d = 2;
  
  const result = distanceValue(arr1, arr2, d);
  console.log(result); // Output: 2
  