// solution 1
// function countDigits(n) {
//     return n ? String(n).length : 0;
// }


// solution 2
// function countDigits(n) {
//     let count = 0;
//     console.log({ n });
//     while (n > 0) {
//         count++;
//         n = parseInt(n / 10);
//         console.log({ n });
//         if (n < 10)
//             return count + 1;
//     }
//     return count;
// }

// optimal solution 
function countDigits(n) {
    return parseInt(Math.log10(n) + 1)
}

console.log({ count: countDigits(122342343) });
