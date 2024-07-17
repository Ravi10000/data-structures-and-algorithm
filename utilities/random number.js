function randomINTInBetween(min, max){
    const randomNumber = Math.random();
    const randomINT = Math.floor(((randomNumber  * max) + min));
    return randomINT;
}

randomINTInBetween(0, 10);

const randomnumbers = {};

for(let i = 0; i < 100; i++){
    const n = randomINTInBetween(5, 10);
    randomnumbers[n] = (randomnumbers[n] || 0) + 1;
}

console.log({randomnumbers})