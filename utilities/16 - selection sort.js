function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        console.log({i});
        let min = i;
        console.log({min, min: arr[min]});
        for(let j = i+1; j < arr.length; j++){
            console.log({i, j, min});
            if(arr[j] < arr[min]){
                min = j;
                console.log({minChanged: arr[min], minIndex: min});
            }
        }
        if(min == i) continue;
            console.log("min swaped");
            [arr[min], arr[i]] = [arr[i], arr[min]];
        
    }
    return arr;
}

const unsortedArray = [1, 50, 29, 10, 14, 30, 37, 14, 18, 1];
console.log({ unsortedArray });
console.log(selectionSort(unsortedArray));