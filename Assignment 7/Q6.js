function rotateString(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    const concatenated = s + s;

    return concatenated.includes(goal);
}

// Example 1
const s = "abcde";
const goal = "cdeab";
const result = rotateString(s, goal);
console.log(result);
