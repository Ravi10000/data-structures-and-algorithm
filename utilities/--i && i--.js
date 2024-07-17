let i = 1;
if(--i || i--){
    console.log("if: ", {i});
}else{
    console.log("else: ", {i});
}