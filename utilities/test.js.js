function tring(){
    console.log("try");
    try{
    console.log("try");
        return "heelow";
    }catch(error){
        console.log({error});
    }
    finally{
        console.log('finally')
    }
}

console.log(tring());

// console.log("hello");