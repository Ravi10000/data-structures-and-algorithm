function factorial(n){
    if(n === 1) return n; // base case
    return n * factorial(n-1); // call function with different arguments
}

console.log(factorial(10))