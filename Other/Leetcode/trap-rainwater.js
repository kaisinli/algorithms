var trap = function (height) {
    var i = 0,
        j = height.length - 1,
        res = 0,
        leftMax = height[i],
        rightMax = height[j];

    while (i <= j) {
        leftMax = Math.max(leftMax, height[i]);
        rightMax = Math.max(rightMax, height[j]);

        if (leftMax > rightMax) {
            res += rightMax - height[j];
            j--;
        } else {
            res += leftMax - height[i];
            i++;
        }
    }

    return res;
};

// [0,1,0,2,1,0,1,3,2,1,2,1]