// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = (nums, target) => {

  // create hash table as an obj 
  const hashTable = {}
  nums.forEach((value, index) => {
    hashTable[value] = index
  })


  // for each num in nums, check to see if the target is in hashTable, the target minus 1 num 
  // equals another number. If so, return the value of that other number, which is the index of that 
  // number, AND i, which is the num we are checking.

  for (let i = 0; i < nums.length; i++) {
    if (hashTable[target - nums[i]]) {
      return ([hashTable[target - nums[i]], i])
    }
  }
}


// #########################################################

function getIndicesOfItemWeights(arr, limit) {
  var hashTable = {};

  for (var i = 0; i < arr.length; i++) {
    var d = limit - arr[i];
    if (hashTable[d] !== undefined) {
      return [i, hashTable[d]];
    } else {
      hashTable[arr[i]] = i
    }
  }

  return [];
}


