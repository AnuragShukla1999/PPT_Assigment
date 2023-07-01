// function multiplySparseMatrices(mat1, mat2) {
//     const m = mat1.length;
//     const k = mat1[0].length;
//     const n = mat2[0].length;

//     // Create the result matrix with the appropriate size
//     const result = new Array(m).fill(0).map(() => new Array(n).fill(0));

//     // Create a map to store the non-zero values of mat1
//     const mat1Map = new Map();
//     for (let i = 0; i < m; i++) {
//       mat1Map.set(i, new Map());
//       for (let j = 0; j < k; j++) {
//         if (mat1[i][j] !== 0) {
//           mat1Map.get(i).set(j, mat1[i][j]);
//         }
//       }
//     }

//     // Perform matrix multiplication
//     for (let i = 0; i < m; i++) {
//       for (let j = 0; j < n; j++) {
//         let sum = 0;
//         for (let l = 0; l < k; l++) {
//           if (mat2[l][j] !== 0 && mat1Map.get(i).has(l)) {
//             sum += mat1Map.get(i).get(l) * mat2[l][j];
//           }
//         }
//         result[i][j] = sum;
//       }
//     }

//     return result;
//   }

//   // Example 1
//   const mat1 = [[1, 0, 0], [-1, 0, 3]];
//   const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
//   const result = multiplySparseMatrices(mat1, mat2);
//   console.log(result);












function multiplySparseMatrices(mat1, mat2) {
    const m = mat1.length; // Number of rows in mat1
    const k = mat1[0].length; // Number of columns in mat1 / Number of rows in mat2
    const n = mat2[0].length; // Number of columns in mat2

    const result = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let x = 0; x < k; x++) {
                result[i][j] += mat1[i][x] * mat2[x][j];
            }
        }
    }

    return result;
}

// Example 1
const mat1 = [[1, 0, 0], [-1, 0, 3]];
const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];

const result = multiplySparseMatrices(mat1, mat2);
console.log(result);
