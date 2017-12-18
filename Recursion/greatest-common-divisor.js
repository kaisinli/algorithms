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
    let answer = Math.min.apply(null, nums);
    let answerFound = false;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % answer !== 0) {
            break;
        } else if (i === (nums.length - 1)) {
            answerFound = true;
        }
    }

    if (answerFound) {
        return answer;
    } else {
      let newNums = nums.map(num => num - 1);
      return gcd(...newNums);
    }
}
