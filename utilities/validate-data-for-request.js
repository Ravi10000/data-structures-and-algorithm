const types = {
    body: "body",
    query: "query",
    param: "param"
}



function check(name){
    return name.split("?");
}

console.log(check("?test"));