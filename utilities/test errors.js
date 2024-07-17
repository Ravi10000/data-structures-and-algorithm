function test(){
    try{
    throwError();
        return "success";
    }catch(error){
        return ["error occured!", error.message];
    }
}


function throwError(){
throwInnerError();    
}

function throwInnerError(){
fourthLevelError()
}

function fourthLevelError(){
throw new Error("checking....");    
}

test();