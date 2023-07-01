function isValid(s) {
    const stack = [];
    const asterisks = [];

    for (const ch of s) {
        if (ch === '(') {
            stack.push(ch);
        } else if (ch === '*') {
            asterisks.push(ch);
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else if (asterisks.length > 0) {
                asterisks.pop();
            } else {
                return false;
            }
        }
    }

    while (stack.length > 0 && asterisks.length > 0) {
        if (stack.pop() > asterisks.pop()) {
            return false;
        }
    }

    return stack.length === 0;
}

// Example 1
const s = "()";
const result = isValid(s);
console.log(result); // Output: true
