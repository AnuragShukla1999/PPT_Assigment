function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sMap = new Map(); // Map to store character mappings from s to t
    const tMap = new Map(); // Map to store character mappings from t to s

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if (sMap.has(sChar)) {
            // Check if the character mapping is consistent
            if (sMap.get(sChar) !== tChar) {
                return false;
            }
        } else {
            // Check if the character in t has already been mapped to a different character in s
            if (tMap.has(tChar)) {
                return false;
            }

            // Create character mappings between s and t
            sMap.set(sChar, tChar);
            tMap.set(tChar, sChar);
        }
    }

    return true;
}

// Example 1
const s = "egg";
const t = "add";
const result = isIsomorphic(s, t);
console.log(result);
