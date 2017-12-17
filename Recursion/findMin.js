// Write a recursive function that finds and returns the minimum element in an array, 
// where the array and its size are given as parameters.

function findMin (arr, arrSize){
    if(arrSize === 0) return arr[0];
    arrSize--;
    arr[0] >= arr[1] ? arr.splice(0, 1) : arr.splice(1, 1);
    
    return findMin(arr, arrSize);
}

