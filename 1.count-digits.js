function countDigits(n) {
    return n ? String(n).length : 0;
}

console.log({ count: countDigits(123123123) });
