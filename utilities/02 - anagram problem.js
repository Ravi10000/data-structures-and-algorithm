const str1 = "cinema";
const str2 = "iceman";

function isAnagram(str, str2){
    if(str.length !== str2.length) return false;
    
    const f1 = {};
    const f2 = {};

    for(let i = 0; i < str.length; i++){
        f1[str[i]] = (f1[str[i]] || 0) + 1;
        f2[str2[i]] = (f2[str2[i]] || 0) + 1;
    }
    console.log({f1, f2})
    
    for(let key in f1)
        if(f1[key] !== f2[key]) return false;
        
    return true;
    }

isAnagram(str1, str2)

// O(n)