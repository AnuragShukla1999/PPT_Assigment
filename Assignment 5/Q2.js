function countCompleteRows(n) {
    let left = 0;
    let right = n;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const coinsNeeded = (mid * (mid + 1)) / 2;
  
      if (coinsNeeded === n) {
        return mid; // Found a complete row
      } else if (coinsNeeded < n) {
        left = mid + 1; // Go right to find more complete rows
      } else {
        right = mid - 1; // Go left to find fewer complete rows
      }
    }
  
    return right; // Return the number of complete rows found
  }
  
  // Example usage
  const n = 5;
  const result = countCompleteRows(n);
  console.log(result);
  