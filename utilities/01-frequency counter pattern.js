const arr1 = [1, 2, 2, 3, 5];
const arr2 = [4, 9, 4, 1, 25];


function checkSquared(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    const fc1 = {};
    const fc2 = {};

    arr1.forEach(item => {
        fc1[item] = (fc1[item] || 0) + 1;
    });
    arr2.forEach(item => {
        fc2[item] = (fc2[item] || 0) + 1;
    });

    for(let key in fc1){
        if(!(key ** 2 in fc2)) {
            return false;
        }
        if(fc2[key ** 2] !== fc1[key]) return false;
    }
    return true;
}


checkSquared(arr1, arr2)
