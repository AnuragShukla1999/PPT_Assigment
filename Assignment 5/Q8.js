// function double(changed) {
//     if (changed.length % 2 !== 0) {
//         return [];
//     }
//     let map = new Map();
//     let ans = [];
//     changed.sort((a, b) => a - b);
//     for (let num of changed) {
//         if (map.has(num)) {
//             map.set(num, map.get(num) - 1);
//             if (map.get(num) === 0) {
//                 map.delete(num);
//             }
//             ans.push(num);
//         } else {
//             let double = num * 2;
//             if (!map.has(double)) {
//                 return [];
//             }
//             map.set(double, map.get(double) - 1);
//             if (map.get(double) === 0) {
//                 map.delete(double);
//             }
//             ans.push(num);
//         }
//     }
//     return ans;
// };

// double(changed)




const findOriginalArray = function(changed) {
    if (changed.length % 2 !== 0) {
        return [];
    }
    let map = new Map();
    let ans = [];
    changed.sort((a, b) => a - b);
    for (let num of changed) {
        if (map.has(num)) {
            map.set(num, map.get(num) - 1);
            if (map.get(num) === 0) {
                map.delete(num);
            }
            ans.push(num);
        } else {
            let double = num * 2;
            if (!map.has(double)) {
                return [];
            }
            map.set(double, map.get(double) - 1);
            if (map.get(double) === 0) {
                map.delete(double);
            }
            ans.push(num);
        }
    }
    return ans;
};


console.log(findOriginalArray)