function one(){
console.log(arguments);
    console.log(arguments.callee)
}

one(1, 2);