function delay(time){
    return new Promise(resolve => {
setTimeout(()=>{
    resolve();
}, time)})
}


async function log(){
    await delay(2000);
    console.log("delayed");
}

log();