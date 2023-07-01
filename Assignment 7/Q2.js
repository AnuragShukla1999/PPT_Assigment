function isStrobogrammatic(num) {
    const strobogrammaticPairs = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6',
    };

    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        const leftChar = num[left];
        const rightChar = num[right];

        if (!strobogrammaticPairs.hasOwnProperty(leftChar) || strobogrammaticPairs[leftChar] !== rightChar) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// Example 1
const num = "69";
const result = isStrobogrammatic(num);
console.log(result);
