function convertTo2DArray(original, m, n) {
    const length = original.length;
    if (m * n !== length) {
        return [];
    }
    const result = [];
    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(original[i * n + j]);
        }
        result.push(row);
    }
    return result;
}
const original = [1, 2, 3, 4];
const m = 2;
const n = 2;
const result = convertTo2DArray(original, m, n);
console.log(result);
