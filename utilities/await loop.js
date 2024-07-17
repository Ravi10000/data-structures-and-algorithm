async function pro(idx){
    return idx;
}

async function see(){
    for(let i = 0; i < 10; i++){
        const idx = await pro(i);
        console.log({i, idx});
}
}

see();