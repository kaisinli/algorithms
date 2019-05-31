/*

We can use sorting and binary search to improve the time complexity to O(N⋅log(N)). 
The first step is to sort the array in an ascending order. 
Once the array is sorted, we traverse the array from left to right, and for each element arr[i], 
we do a binary search for arr[i] + k in arr. If the element is found, we add this pair to our output array.

Both the first and second steps take O(N⋅log(N)). So the overall time complexity is O(N⋅log(N)).

Time Complexity: the most expensive step in the algorithm is sorting the array, 
which takes O(N⋅log(N)) time. The while loop is O(N) since every iteration increments one of 
the counters by one (thus the maximal number of iterations is 2N). 
So the total time complexity is O(N⋅log(N)) + O(N) = O(N·log(N)).

Space Complexity: since the size of the output itself is O(N), the space complexity is O(N) as well. 
However, excluding the output, notice that we used only O(1) space since the sorting is in place and 
we only initialize two pointers.

*/

function findPairsWithGivenDifference(arr, k) {
    arr.sort((a, b) => a - b);
    var pairs = [];
    var i = 0;
    var j = 1;

    while (j < arr.length && i < arr.length) {
       if (i != j && arr[j] - arr[i] === k) {
         pairs.push([arr[j], arr[i]]);
         i++;
         j++;
       } else if(arr[j] - arr[i] < k) {
         j++;
       } else { 
         i++;
       }
    }
    return pairs
}

/**
 * a less optimized solution:
 */

function findPairsWithGivenDifference(arr, k) {
    arr.sort((a, b) => a - b);
    var pairs = [];
    var i = 1;
    var lastElem = arr[arr.length - 1];

    while (arr.length > 1) {
        if (Math.abs(arr[0] - arr[i]) === k) {
            pairs.push([arr[i], arr[0]])
        }
        
        if (Math.abs(arr[0] - arr[i]) > k || i === arr.length-1) {
            arr.splice(0, 1);
            i = 0;
        }

        i++;
    }
    return pairs
}