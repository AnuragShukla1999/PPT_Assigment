// function findAnagrams(s, p) {
//     const result = [];
//     const freqP = {}; // Frequency map for string p
//     const freqS = {}; // Frequency map for sliding window in s
//     let left = 0;
//     let right = 0;

//     // Initialize freqP with character frequencies from p
//     for (let i = 0; i < p.length; i++) {
//         freqP[p[i]] = (freqP[p[i]] || 0) + 1;
//     }

//     while (right < s.length) {
//         // Expand the window by adding the character at index right to freqS
//         freqS[s[right]] = (freqS[s[right]] || 0) + 1;
//         right++;

//         // Shrink the window if the size is equal to the length of p
//         if (right - left === p.length) {
//             // Compare freqP and freqS
//             if (isEqual(freqP, freqS)) {
//                 result.push(left);
//             }
//             // Remove the character at index left from freqS
//             freqS[s[left]]--;
//             if (freqS[s[left]] === 0) {
//                 delete freqS[s[left]];
//             }
//             left++;
//         }
//     }

//     return result;
// }

// // Helper function to compare two frequency maps
// function isEqual(map1, map2) {
//     if (Object.keys(map1).length !== Object.keys(map2).length) {
//         return false;
//     }
//     for (let key in map1) {
//         if (map1[key] !== map2[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// // Example usage
// const s = "cbaebabacd";
// const p = "abc";
// const indices = findAnagrams(s, p);
// console.log(indices); // Output: [0, 6]













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
