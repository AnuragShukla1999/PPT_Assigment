function findAnagrams(s, p) {
    const result = [];
    const sFreq = new Array(26).fill(0);
    const pFreq = new Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);

    // Calculate the frequency of characters in the pattern string p
    for (const char of p) {
        pFreq[char.charCodeAt(0) - aCharCode]++;
    }

    let left = 0;
    let right = 0;
    while (right < s.length) {
        const rightChar = s[right].charCodeAt(0) - aCharCode;
        sFreq[rightChar]++;

        // Move the window to the right until it reaches the size of p
        if (right - left + 1 === p.length) {
            // Compare the frequency arrays of the window and pattern
            if (sFreq.join('') === pFreq.join('')) {
                result.push(left);
            }

            // Remove the leftmost character from the window and update its frequency
            const leftChar = s[left].charCodeAt(0) - aCharCode;
            sFreq[leftChar]--;
            left++;
        }

        right++;
    }

    return result;
}

// Example usage
const s = "cbaebabacd";
const p = "abc";
console.log(findAnagrams(s, p)); // Output: [0, 6]
