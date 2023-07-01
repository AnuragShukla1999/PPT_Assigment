class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function constructTreeFromString(s) {
    if (!s || s.length === 0) {
        return null;
    }

    const stack = [];
    let num = "";
    let root = null;
    let current = null;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!isNaN(char) || char === "-") {
            num += char;
        } else if (char === "(") {
            if (num !== "") {
                const newNode = new TreeNode(parseInt(num));
                num = "";

                if (current) {
                    current.left = newNode;
                    stack.push(current);
                    current = newNode;
                } else {
                    root = newNode;
                    current = newNode;
                }
            }
        } else if (char === ")") {
            if (num !== "") {
                const newNode = new TreeNode(parseInt(num));
                num = "";

                current.right = newNode;
                current = newNode;
            } else {
                current = stack.pop();
            }
        }
    }

    return root;
}

// Example usage
const s = "4(2(3)(1))(6(5))";
const root = constructTreeFromString(s);
console.log(root); // Output: [4,2,6,3,1,5]
