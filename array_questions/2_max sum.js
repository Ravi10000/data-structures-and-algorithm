// return 0, if all numbers in the array is negative;
// return 0, if array length is 0;
function findMaxSum(array) {
    let maxSum = 0;
    let tempSum = 0;
    for (let n of array) {
        tempSum += n;
        if (tempSum > maxSum) maxSum = tempSum;
        if (tempSum < 0) tempSum = 0;
    }
    return maxSum;
}

// console.log(findMaxSum([])); // 0
// console.log(findMaxSum([-2, -3, -3, -6, -4, -5])); // 0
console.log(findMaxSum([2, 3, -3, -1, 2, 3, 4, 5, -6, -4, 2, 5, -8])); // 15
//                      2, 5,  2,  1, 3, 6,10,15                       _