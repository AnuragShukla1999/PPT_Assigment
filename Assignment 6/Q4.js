function findMaxLength(nums) {
    const n = nums.length;
    const map = new Map();
    let maxLength = 0;
    let count = 0;
  
    map.set(0, -1); // Initialize the map with a running sum of 0 at index -1
  
    for (let i = 0; i < n; i++) {
      count += nums[i] === 0 ? -1 : 1; // Increment count by 1 for 1 and decrement by 1 for 0
  
      if (map.has(count)) {
        maxLength = Math.max(maxLength, i - map.get(count));
      } else {
        map.set(count, i);
      }
    }
  
    return maxLength;
  }
  
  // Example 1
  const nums = [0, 1];
  const result = findMaxLength(nums);
  console.log(result); // Output: 2
  