function subStrCount(str, subStr){
    let count = 0;
    for(let i = 0; i< str.length; i++){
        for(let j = 0; j < subStr.length; j++){
            if(subStr[j] !== str[i + j]) break;
            if(j === subStr.length -1 ) count++;
        }
    }
    return count;
}

console.log(subStrCount("HI How How are are you you?", "HI"))