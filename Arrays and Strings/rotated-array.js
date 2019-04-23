// find rotation index using binary search. The answer is the same of number of rotation

function findRotatePoint(arr) {
    let startIndex = 0,
        endIndex = arr.length - 1,
        lastIndex = arr.length - 1,
        mid = Math.floor(startIndex + (endIndex - startIndex) / 2);

    while (startIndex <= endIndex) {
        if (arr[mid] > arr[lastIndex]) startIndex = mid + 1;
        else if (arr[mid] < arr[lastIndex]) endIndex = mid - 1;

        mid = Math.floor(startIndex + (endIndex - startIndex) / 2);
    }
    return mid + 1
}
