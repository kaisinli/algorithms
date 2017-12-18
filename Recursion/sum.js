// Write a recursive function that computes the sum of all numbers from 1 to n, where n is given as parameter.
//return the sum 1+ 2+ 3+ ...+ n

function getSum(n) {
    if(n === 0) return 0
    return (n + getSum(n-1))
}

// compute a sum of multiple values

const sum = (...nums) => {
  let finalSum = nums[0], 
      i = 1;
  
  while(nums[i]){
    finalSum += sum(nums[i])
    i++;
  }
  
  return finalSum;
}