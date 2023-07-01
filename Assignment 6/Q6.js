function findOriginalArray(changed) {
    const n = changed.length;
    const original = [];
    const counts = new Map();
  
    if (n % 2 === 1) {
      return [];
    }
  
    for (const num of changed) {
      counts.set(num, (counts.get(num) || 0) + 1);
    }
  
    changed.sort((a, b) => a - b);
  
    for (const num of changed) {
      if (counts.get(num) === 0) {
        continue;
      }
  
      if (counts.get(num / 2) > 0) {
        original.push(num / 2);
        counts.set(num / 2, counts.get(num / 2) - 1);
      } else {
        return [];
      }
  
      counts.set(num, counts.get(num) - 1);
    }
  
    return original;
  }
  
  // Example 1
  const changed = [1, 3, 4, 2, 6, 8];
  const result = findOriginalArray(changed);
  console.log(result); // Output: [1, 3, 4]
  