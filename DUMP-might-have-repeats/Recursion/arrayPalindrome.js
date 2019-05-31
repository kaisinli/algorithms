//returns 1 if a[] is a palindrome, 0 otherwise

function isPalindrome (arr, arrSize){
  if (arrSize === 0 || arrSize === 1) return 1;
  if (arr[0] === arr[arrSize-1]) {
    arr.splice(0,1);
    arr.splice(arrSize-1, 1);
    arrSize -= 2;
    return isPalindrome(arr, arrSize)
  } else { 
    return 0;
  }
}
