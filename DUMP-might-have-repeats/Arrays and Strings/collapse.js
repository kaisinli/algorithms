/**
 * Collapses a 2 dimensional array into a 1 dimensional array, applying
 * a reducer function across the elements at each index i for all constituent
 * arrays.
 *
 * See test assertions below for example input with expected output.
 *
 * @param arrayOfArrays {Array} 2 dimensional array. Inner arrays must
 *        all have the same length. Behavior is undefined if inner arrays
 *        have non-matching lengths. Outer array must not be empty (must contain
 *        at least one inner array). If inner arrays are all empty, the resulting
 *        array will be empty.
 * @param reducer {Function} a function used to reduce the elements
 *        across the constituent arrays. Accepts 2 arguments: (previous, current)
 *
 * @return {Array} 1 dimensional array with the collapsed values. The resulting
 *         array has the same length as the constituent arrays. 
 */


function collapse(arrayOfArrays, reducer) {
    let oneDim = [];
    let arrayLength = arrayOfArrays[0].length;
    let i = 0, j = 0;

    while (j < arrayLength) {
        let singleArray = [];
        while (arrayOfArrays[i]) {
            singleArray.push(arrayOfArrays[i][j]);
            i++;
        }
        oneDim.push(singleArray.reduce(reducer));
        j++;
        i = 0;
    }

    return oneDim
}

// var expect = require('chai').expect;

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(collapse([[1, 2], [10, 20], [100, 200]], add))
console.log(collapse([[3, 2], [9, 4]], multiply))

// expect(collapse([[1, 2], [10, 20], [100, 200]], add)).to.eql([111, 222]);

// expect(collapse([[3, 2], [9, 4]], multiply)).to.eql([27, 8]);

// expect(collapse([[1, 6, 7], [2, 0, 2], [10, 4, -2]], add)).to.eql([13, 10, 7]);

// expect(collapse([[]], add)).to.eql([]);

// expect(collapse([[]], multiply)).to.eql([]);


// console.log('======= All Tests Passed. =======');