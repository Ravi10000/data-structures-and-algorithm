function twoSum(array, target){
    const length = array.length;
    for(let i = 0; i < length; i++){
        for(let j = 1; j < length; j++){
            if(array[i] + array[j] === target) return [i, j];
        }
    }
    return [-1, -1];
}

var twoSum2 = function(nums, target) {
    const map = {};
    nums.forEach((num, i) => {
        if(num in map)
            map[num].push(i);
        else 
            map[num] = [i];
    });
    const arrayLength = nums.length;
    for(let i = 0; i < arrayLength; i++){
        const num = nums[i];
          const difference = target - num;
          if(difference in map){
              if(difference !== num) return [i, map[difference][0]];
              else if(map[difference].length < 2) continue;
              else return [i, map[difference][1]];
          }
    }

    return [-1, -1];
};

console.log(twoSum([2,6,5,8,11], 14));
console.log({
    14: twoSum2([2,6,5,8,11], 14),
     6: twoSum2([3,2, 4], 6),
// 6: twoSum2([3, 3], 6),
})