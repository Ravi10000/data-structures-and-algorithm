function findMissingNumber(arr, n) {
    const nSum = (n * (n + 1)) / 2; // sum of all natural numbers
    const arraySum = arr.reduce((acc, n) => acc + n, 0);
    return nSum - arraySum;
}

console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));