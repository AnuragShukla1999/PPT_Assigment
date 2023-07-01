function canAchieveGoal(s, goal) {
  if (s.length !== goal.length) {
    return false; // Lengths are different, can't achieve the goal
  }

  const diffIndices = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diffIndices.push(i); // Store the indices where characters are different
    }
  }

  if (diffIndices.length !== 2) {
    return false; // More than two different characters, can't achieve the goal
  }

  const [idx1, idx2] = diffIndices;
  // Check if swapping the characters at idx1 and idx2 results in goal
  return s[idx1] === goal[idx2] && s[idx2] === goal[idx1];
}

// Test case
const s = "ab";
const goal = "ba";
console.log(canAchieveGoal(s, goal)); // Output: true
