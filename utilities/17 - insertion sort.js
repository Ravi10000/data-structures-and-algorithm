function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    for(let j = i - 1; j >= 0 && arr[j] > currentValue; j--){
        arr[j + 1] = arr[j];
    }
    arr[j+1] = currentValue;
    // for (let j = 0; j < i; j++) {
    //   console.log({ j });
    //   if (currentValue < arr[j]) {
    //     for (let k = i - 1; k >= j; k--) {
    //       console.log("----");
    //       console.log(k + 1, k);
    //       console.log(arr[k + 1], arr[k]);
    //       arr[k + 1] = arr[k];
    //     }
    //     arr[j] = currentValue;
    //     break;
    //   }
    // }
    console.log({ semiSortedArr: arr.slice(0, i+1) });
  }

  return arr;
}

const unsortedArray = [50, 29, 10, 14, 30, 37, 14, 18, 1];
console.log(insertionSort(unsortedArray));
