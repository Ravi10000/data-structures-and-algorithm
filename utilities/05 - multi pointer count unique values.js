const arr = [-1, -1, 1, 1, 2, 2, 2, 3, 3, 4, 5];

function countUniqueValues(arr){
    let a = 0;
    const unique = [];
    for (let b = 1; b <= arr.length; b++){
         if(arr[a] !== arr[b]){
            unique.push(arr[a]);
            a = b;
        }
    }
    console.log({unique});
    return unique;
}

countUniqueValues(arr);
