function GCD(n, m) {
    const smallNumber = Math.min(n, m);

    let gcd = 1;
    let i = smallNumber;
    let count = 1;
    let increment = smallNumber % 2 !== 0 ? 2 : 1;

    while (i > 1) {
        console.log({ i, count, n, m, gcd });
        if (parseInt(i) === i && n % i === 0 && m % i === 0) {
            gcd = i;
            break;
        }
        count += increment;
        i = smallNumber / count;
    }
    console.log({ i, count });

    console.log({ gcd: `GCD of ${n} and ${m} is ${gcd}` })
    return gcd;
}


GCD(155, 1255);