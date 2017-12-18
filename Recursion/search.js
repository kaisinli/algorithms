/**
 * binary search to find a target in an array,
 * assume arr is sorted from smallest to biggest
 */


const binSearch = (arr, arrSize, target) => {
    // base case
    if (arrSize <= 1) return arr[0] === target ? true : false;
    
    let midpoint = Math.floor(arrSize/2);

    if (arr[midpoint] === target) {
      return true;

    } else if (arr[midpoint] < target) {
      arr.splice(0, arrSize - midpoint);
      return binSearch (arr, arr.length, target);
      
    } else if (arr[midpoint] > target){
      arr.splice(midpoint, arrSize - midpoint);
      return binSearch (arr, arr.length, target);
    }
}

// 1 2 3 4 