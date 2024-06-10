function reverseNumber(n) {
    let reversed = 0;
    while (n > 0) {
        let last = n % 10;
        n = n / 10;
        reversed = (reversed * 10) + last;
    }
    return reversed;
}

console.log(reverseNumber(1223356));