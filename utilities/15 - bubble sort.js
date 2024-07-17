function bubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
        let noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                noSwaps = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
            }
        }
        if(noSwaps) break;
    }
       
return arr;
}

const unsortedArray = [50, 29, 10, 14, 30, 37, 14, 18, 1];
console.log({ unsortedArray })
console.log({ sortedArray: bubbleSort(unsortedArray) });



// alternate swap
// let temp = arr[j];
// arr[j] = arr[j + 1];
// arr[j + 1] = temp;
