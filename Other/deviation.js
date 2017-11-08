/**
 * prompt:
 * 
 * Given an array of integer elements and an integer d, please consider all the sequences of d consecutive elements in the array. For each sequence we compute the difference between the maximum and the minimum value of the elements in that sequence and name it the deviation. Your task is to write a function that computes the maximum value among the deviations of all the sequences considered above, and print the value.
 * 
 */

function deviation(v, d) {
    var maxDeviation = 0;
    for (var i = 0; i < v.length; i++) {
        var sequence = v.slice(i, i + d);
        var max = Math.max.apply(Math, sequence);
        var min = Math.min.apply(Math, sequence);
        var currentDeviation = max-min;
        maxDeviation = currentDeviation > maxDeviation ? currentDeviation : maxDeviation
    }
    return maxDeviation
}
