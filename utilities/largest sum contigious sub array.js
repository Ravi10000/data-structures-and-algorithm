function largestSum(arr){
    const arrLength = arr.length;
    if(!arrLength) return 0;
    const isAllItemsNegative = arr.every(item => item <= 0)
    if(isAllItemsNegative) return 0;
    let currentSum = 0;
    let maxSum = currentSum;
    for(let item of arr){
        currentSum += item;
        if(currentSum > maxSum) maxSum = currentSum;
        else if(currentSum < 0) currentSum = 0;
    }
    return maxSum;
}

console.log(maxSum([-2, -3, 4, -1, -2, 1, 5, -3]))