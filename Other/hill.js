/** 
 * Given an array of integer, find the minimum value X that makes possible the following:
 * 
 *  -  Generate a new array that is sorted in strictly ascending order by increasing or deceasing each of the elements of the initial araay with the integer values in the [0, X] range.
 * 
 * Example:
 *  input : [5, 4, 3, 2, 8]
 *  output: 3 
 */

var arr = [5, 4, 3, 2, 8]

const hill = (arr) => {
    let sorted = arr.slice(0).sort((a, b) => { return a - b });
    let minValue = 0;

    for (let i = 0; i < arr.length; i++) {
        let a = arr[i]
        let b = sorted[i]

        //compare the sorted and not sorted
        minValue = Math.abs(a - b) > minValue ? Math.abs(a - b) : minValue
    }
    
    return minValue
}
