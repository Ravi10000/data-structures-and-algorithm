function reverseArray(arr = []) {
    const arrLength = arr.length;
    // odd length array (7-1) / 2 = 3 ---- 3 loops
    // even length array (8-1) / 2 = 3.5 ---- 4 loops
    for (let i = 0; i < (arrLength - 1) / 2; i++)
        [arr[i], arr[arrLength - 1 - i]] = [arr[arrLength - 1 - i], arr[i]];
    return arr;
}

console.log(reverseArray([11, 22, 33, 44, 55, 66, 77, 88, 99, 0]))