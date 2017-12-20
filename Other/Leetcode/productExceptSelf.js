var productExceptSelf = function (nums) {
    var productOfAll = 1;
    var zeroCounter = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            productOfAll *= nums[i];
        } else {
            zeroCounter++;
        }
    }

    var answer;

    if (zeroCounter > 1) {
        answer = [];
        for (let i = 0; i < nums.length; i++) {
            answer.push(0);
        }
    } else if (zeroCounter === 0) {
        answer = nums.map(num => {
            return productOfAll / num;
        });
    } else {
        answer = nums.map(num => {
            return num === 0 ? productOfAll : 0;
        });
    }

    return answer;
};
