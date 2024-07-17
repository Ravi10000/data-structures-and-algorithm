const low = 100;
const high = 50000;
const values = [];
for(let i = 1; i < 10; i++){
    let num = i;
    let next = i+1;
    while(num < high && next < 10){
        num = num * 10 + next;
        if(num > low && num < high){
            values.push(num);
        }
        ++next;
    }
}

values.sort((a, b)=> (a-b))