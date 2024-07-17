function findMaxSum(arr, n){
    if(!arr || arr?.length < n) return null;
    let maxSum = 0;
    let tempSum = 0;

    for(let i = 0; i < n; i++){
        tempSum +=  arr[i];
    }
    maxSum = tempSum;
    for(let i = n; i < arr.length; i++){
        tempSum = tempSum - arr[i - n] + arr[i];
        if(tempSum > maxSum) {
            maxSum = tempSum;
        }
    }

    return maxSum;
}

console.log({maxSum: findMaxSum([1, 2, 3, 3, 4, 5, 1, 2, 4, 5, 7, 8, 3, 2], 3)})