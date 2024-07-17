function extractDigits(n){
    console.log({n});
    while(n > 0){
        let temp = n % 10;
        n = parseInt(n/10);
        console.log({temp});
    }   
}
extractDigits(2345);