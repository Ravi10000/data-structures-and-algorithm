const arr = [-1, -1, 1, 1, 2, 2, 2, 3, 3, 4, 5];

function countUniqueValues(arr){
    let a = 0;
    let b = 1;
    while(b < arr.length){
        if(arr[a] !== arr[b]){
            a += 1;
            arr[a] = arr[b];
        }
        b += 1;
}
    return a + 1;
}

countUniqueValues(arr);
 