const p1 = () => new Promise(res => {
    setTimeout(()=>{
        console.log("task 1 !");
        res();
    }, 3_000)
})
const p2 = () => new Promise(res => {
    setTimeout(()=>{
        console.log("task 2 !");
        res();
    }, 2_000)
})


const p3 = () => new Promise(res => {
    setTimeout(()=>{
        console.log("task 3!");
        res();
    }, 4_000)
});

async function logTasks(){
     await p1();
     await p2();
     await p3();
}

logTasks();