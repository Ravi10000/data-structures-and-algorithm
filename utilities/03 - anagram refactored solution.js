const str1 = "cinema";
const str2 = "iceman";

function isAnagram(str, str2){
    if(str.length !== str2.length) return false;
    
    const lookup = {};

    for(let i = 0; i < str.length; i++)
        lookup[str[i]] = (lookup[str[i]] || 0) + 1;

    for(let i = 0; i < str2.length; i++){
        let letter = str2[i];
        if(!lookup[letter]) return false;
        lookup[letter] -= 1;
    }
    return true;
}

isAnagram(str1, str2)