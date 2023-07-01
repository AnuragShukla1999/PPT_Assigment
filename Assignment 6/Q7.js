function generateMatrix(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let num = 1;
    let left = 0,
      right = n - 1,
      top = 0,
      bottom = n - 1;
  
    while (left <= right && top <= bottom) {
      // Traverse right
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num++;
      }
      top++;
  
      // Traverse down
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num++;
      }
      right--;
  
      // Traverse left
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          matrix[bottom][i] = num++;
        }
        bottom--;
      }
  
      // Traverse up
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          matrix[i][left] = num++;
        }
        left++;
      }
    }
  
    return matrix;
  }
  
  // Example 1
  const n = 3;
  const result = generateMatrix(n);
  console.log(result);
  