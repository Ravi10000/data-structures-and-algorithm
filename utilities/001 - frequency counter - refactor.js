const arr1 = [1, 2, 2, 3, 5];
const arr2 = [4, 9, 4, 1, 25];

function checkSquared(arr1, arr2){
    if(arr1.length !== arr2.length) return false;
    const fc1 = {};
    const fc2 = {};
    for(let i = 0; i < arr1.length; i++){
        fc1[arr1[i]] = (fc1[arr1[i]] || 0) + 1;
        fc2[arr2[i]] = (fc2[arr2[i]] || 0) + 1;
    }
    console.log({fc1, fc2});

    for(let item of arr1)
        if(fc1[item] !== fc2[item**2]) return false;
    
    return true;
}

checkSquared(arr1, arr2);