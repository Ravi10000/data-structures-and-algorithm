function palindrome(n) {
    let reverse = 0;
    let tempN = n;
    while (tempN < 0) {
        let lastNumber = tempN % 10;
        reverse = (reverse * 10) + lastNumber;
        tempN = parseInt(tempN / 10);
    }

    return reverse === n
}

console.log(palindrome(121));