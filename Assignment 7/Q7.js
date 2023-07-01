function backspaceCompare(s, t) {
    const stackS = [];
    const stackT = [];

    for (const char of s) {
        if (char === '#') {
            stackS.pop();
        } else {
            stackS.push(char);
        }
    }

    for (const char of t) {
        if (char === '#') {
            stackT.pop();
        } else {
            stackT.push(char);
        }
    }

    return stackS.join('') === stackT.join('');
}

// Example 1
const s = "ab#c";
const t = "ad#c";
const result = backspaceCompare(s, t);
console.log(result);
