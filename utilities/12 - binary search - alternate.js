function binarySearch(arr, item){
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right)/2);
    while(item !== arr[middle] && left <= right){
        if(item < arr[middle]){
            right = middle -1;
            }else if(item > arr[middle]){left = middle + 1;}
        middle = Math.floor((left + right)/2);
    }
    
    return item === arr[middle] ? middle : -1;
}

binarySearch([20, 30, 40, 60, 40], 50)