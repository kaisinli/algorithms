/**
 * Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.

 */


// use bitwise operators
const getSum = function (a, b) {
    // first conver the numbers to binary
    aBit = a.toString(2);
    bBit = b.toString(2);
    let result = '';
    let carry = '';
    let i = aBit.length - 1;
    let j = bBit.length - 1;
    let sum = 0;

    while (i >= 0 || j >= 0) {
        sum = Number(aBit[i]) + Number(bBit[j]);

    }
};

