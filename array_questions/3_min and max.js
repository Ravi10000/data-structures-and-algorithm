function findMinAndMax(array) {
    const isOdd = array.length % 2;
    let min, max;
    if (isOdd) min = max = array[0];
    else
        [min, max] = array[0] > array[1] ? [array[1], array[0]] : [array[0], array[1]];

    for (let i = (isOdd ? 1 : 2); i < array.length; i += 2)
        if (array[i] < array[i + 1]) {
            if (array[i] < min) min = array[i];
            if (array[i + 1] > max) max = array[i + 1];
        } else {
            if (array[i + 1] < min) min = array[i + 1];
            if (array[i] > max) max = array[i];
        }

    return { min, max }
}

console.log(findMinAndMax([2, 3, -3, -1, 2, 3, 4, 15, -6, -4, 2, 5, -8, 6]));
