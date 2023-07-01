function minAsciiDeleteSum(s1, s2) {
    const m = s1.length;
    const n = s2.length;

    // Create a 2D DP array to store the LCS lengths
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    // Calculate LCS lengths using dynamic programming
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + s1.charCodeAt(i - 1);
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Calculate the ASCII sum of deleted characters
    let asciiSum = 0;
    for (let i = 0; i < m; i++) {
        asciiSum += s1.charCodeAt(i);
    }
    for (let j = 0; j < n; j++) {
        asciiSum += s2.charCodeAt(j);
    }
    return asciiSum - 2 * dp[m][n];
}

// Example 1
const s1 = "sea";
const s2 = "eat";
const result = minAsciiDeleteSum(s1, s2);
console.log(result); // Output: 231
