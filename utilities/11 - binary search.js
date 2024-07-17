function binarySearch(arr, item){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let middle = Math.floor((left + right)/2);
        if(item === arr[middle]) {
            return middle;
        }
        if(item > arr[middle]){
            left = middle + 1;
        }else if(item < arr[middle]){
            right = middle -1;
        }   
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5,6 , 7, 8, 9], 9))