/**
 * binary search to find a target in an array,
 * assume arr is sorted from smallest to biggest
 */

// returns true or false
const binSearch = (arr, arrSize, target) => {
  // base case
  if (arrSize <= 1) return arr[0] === target ? true : false;

  let midpoint = Math.floor(arrSize / 2);

  if (arr[midpoint] === target) {
    return true;

  } else if (arr[midpoint] < target) {
    arr.splice(0, arrSize - midpoint);
    return binSearch(arr, arr.length, target);

  } else if (arr[midpoint] > target) {
    arr.splice(midpoint, arrSize - midpoint);
    return binSearch(arr, arr.length, target);
  }
}

// returns index
function binarySearchRecursive(array, target, low, high) {
  if (high < low) {
    return -1;
  }
  let mid = Math.floor((low + high) / 2);
  if (array[mid] > target) {
    return binarySearchRecursive(array, target, low, mid - 1);
  }
  if (array[mid] < target) {
    return binarySearchRecursive(array, target, mid + 1, high);
  }

  return mid;
}

// no recursion
function binarySearch(array, target) {
  let low = 0,
    high = array.length - 1,

  if (array[mid] === target) return mid;

  while (low <= high) {
    let mid = low + (Math.floor((end - start) / 2))
    if (array[mid] < target) low = mid + 1
    else if (array[mid] = target) return mid
    else high = mid - 1
  }

  return mid;
}

