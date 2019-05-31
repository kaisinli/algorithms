// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

var merge = function (nums1, m, nums2, n) {
    let current = 0;
    if (n > 0) {
        while (n > 0 && m >= 0) {
            if (nums2[0] <= nums1[current] || m === 0) {
                nums1.splice(current, 0, nums2[0]);
                nums2.splice(0, 1);
                n--;
            } else if (nums2[0] > nums1[current]) {
                m--;
            }
            current++;
        }
        console.log(n, m, current, nums1)
        nums1.splice(current);
        // console.log(n,m,current, nums1)
    }
};

// ############

function mergeArrays(arr1, arr2) {
    let merged = [];

    while (arr1.length > 0 && arr2.length > 0) {
        if (arr2[0] <= arr1[0]) {
            merged.push(arr2[0]);
            arr2.splice(0, 1);
        } else if (arr2[0] > arr1[0]) {
            merged.push(arr1[0])
            arr1.splice(0, 1)
        }
    }

    if (arr1.length !== 0) {
        merged = merged.concat(arr1);
    }

    if (arr2.length !== 0) {
        merged = merged.concat(arr2);
    }

    return merged;
}

