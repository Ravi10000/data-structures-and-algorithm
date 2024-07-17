const arr1 = [-6, -5, -2, 0, 1, 3, 4, 5 ];


// for sorted arrays only
function sumZero(arr){
    let i = 0;
    let j = arr.length -1;
    while(i < j){
    const result = arr[i] + arr[j];
    
    if(result === 0) return [arr[i], arr[j]];
    else if(result > 0) j--;
    else i++;
}
    return false;
}

sumZero(arr1)

