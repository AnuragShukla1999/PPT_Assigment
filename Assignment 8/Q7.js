function decodeString(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ']') {
      stack.push(s[i]);
    } else {
      // Find the encoded string within the square brackets
      let encodedString = '';
      while (stack[stack.length - 1] !== '[') {
        encodedString = stack.pop() + encodedString;
      }
      stack.pop(); // Remove the '[' character

      // Find the repeat count
      let repeatCount = '';
      while (stack.length > 0 && !isNaN(parseInt(stack[stack.length - 1]))) {
        repeatCount = stack.pop() + repeatCount;
      }

      repeatCount = parseInt(repeatCount);

      // Repeat the decoded string and push it back to the stack
      let decodedString = '';
      for (let j = 0; j < repeatCount; j++) {
        decodedString += encodedString;
      }
      stack.push(decodedString);
    }
  }

  return stack.join('');
}

// Test case
const encodedString = "3[a]2[bc]";
console.log(decodeString(encodedString)); // Output: "aaabcbc"
