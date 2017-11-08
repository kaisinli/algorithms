/* Task: given a range of numbers, count the number of perfect squares
where the square root is a whole number. */

function perfectSquareCount(a, b) {
    let highBound = a - b > 0 ? a : b;
    let lowBound = highBound === a ? b : a;
    let count = 0;
    for (var i = lowBound; i <= highBound; i++) {
        if (Number.isInteger(Math.sqrt(i)) === true) count++
    }
    return count;
}
