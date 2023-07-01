function validMountainArray(arr) {
    const n = arr.length;
    let i = 0;
  
    // Find the increasing sequence
    while (i < n - 1 && arr[i] < arr[i + 1]) {
      i++;
    }
  
    // Check if i is at the start or end
    if (i === 0 || i === n - 1) {
      return false;
    }
  
    // Check the decreasing sequence
    while (i < n - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
  
    return i === n - 1;
  }
  
  // Example 1
  const arr = [2, 1];
  const result = validMountainArray(arr);
  console.log(result); // Output: false
  