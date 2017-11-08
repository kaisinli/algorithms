var removeElement = function(nums, val) {
  var i = 0;
  var toCheck = nums.length;
  while (i < toCheck) {
    if(nums[i] === val) {
      nums.splice(i,1);
      toCheck--;
    } else {
      i++;
    }
  }
  return nums;
}

