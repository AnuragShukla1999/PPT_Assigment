function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // Create a 2D array to store the LCS lengths
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Fill in the LCS lengths
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Return the minimum number of steps
    return m + n - 2 * dp[m][n];
}

// Example 1
const word1 = "sea";
const word2 = "eat";
const result = minDistance(word1, word2);
console.log(result); // Output: 2
