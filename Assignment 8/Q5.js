function compress(chars) {
    let count = 1; // Count of consecutive repeating characters
    let index = 0; // Index to update the compressed array

    for (let i = 0; i < chars.length; i++) {
        // Check if the current character is the same as the next character
        if (i < chars.length - 1 && chars[i] === chars[i + 1]) {
            count++;
        } else {
            chars[index] = chars[i]; // Update the character in the compressed array

            // Update the count if it is greater than 1
            if (count > 1) {
                const countStr = count.toString();
                for (let j = 0; j < countStr.length; j++) {
                    chars[++index] = countStr[j]; // Update the count in the compressed array
                }
            }

            count = 1; // Reset the count for the next group
            index++; // Move to the next position in the compressed array
        }
    }

    return index; // Return the new length of the compressed array
}

// Example usage
const chars = ["a", "a", "b", "b", "c", "c", "c"];
const newLength = compress(chars);
console.log(newLength); // Output: 6
console.log(chars.slice(0, newLength)); // Output: ["a", "2", "b", "2", "c", "3"]
