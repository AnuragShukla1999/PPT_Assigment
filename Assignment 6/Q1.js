function reconstructPermutation(s) {
    const n = s.length;
    const perm = new Array(n + 1);
    let smallest = 0;
    let largest = n;
  
    for (let i = 0; i < n; i++) {
      if (s[i] === 'I') {
        perm[i] = smallest++;
      } else {
        perm[i] = largest--;
      }
    }
  
    perm[n] = smallest;
  
    return perm;
  }
  
  // Example 1
  const s = "IDID";
  const result = reconstructPermutation(s);
  console.log(result); // Output: [0, 4, 1, 3, 2] or any valid permutation
  