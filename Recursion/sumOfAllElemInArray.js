// Write a recursive function that computes and returns the sum of all elements in an array, 
// where the array and its size are given as parameters.

function sumAll (arr, arrSize) {
    if(arrSize === 1) return arr[0];
    arrSize--;
    arr[0] = arr[0]+arr[1];
    arr.splice(1,1);
    
    return sumAll(arr, arrSize)
}


