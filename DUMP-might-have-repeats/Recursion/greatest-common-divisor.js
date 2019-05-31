// const gcd = (...nums) => {
//     let answer = Math.min.apply(null, nums);
//     while(answer > 0) {
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] % answer !== 0) {
//                 answer--;
//                 break;
//             } else if (i === (nums.length-1)){
//                 return answer;
//             } 
//         }
//     }
// }

const gcd = (...nums) => {
    // find the smallest of the numbers
    let answer = Math.min.apply(null, nums);

    // if all numbers are divisible by the smallest of the numbers, then we found our answer
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % answer !== 0) {
            break;
        } else if (i === (nums.length - 1)) {
            return answer;
        }
    }

    // if not, look for the next divisible number of "answer", start the test on the next smaller integer of of the current "answer" 
    let nextDivisibleOfMin = answer - 1;

    // look for the next divisible number
    while (nextDivisibleOfMin > 0) {
        if (answer % nextDivisibleOfMin === 0) {
            break;
        } else {
            nextDivisibleOfMin--;
        }
    }

    // now we find the new set of numbers to do the recursion on. Find the difference between current asnwer and nextDivisibleOfMin. Subtract this from all the numbers.
    let newNums = nums.map(num => num - (answer - nextDivisibleOfMin));
    return gcd(...newNums);
}
