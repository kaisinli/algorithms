var merge = function(nums1, m, nums2, n) {
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
    console.log(n,m,current, nums1)
		nums1.splice(current);
    // console.log(n,m,current, nums1)
	}
};

let nums1 = [1,0],
	m = 1,
	nums2 = [2],
	n = 1;

// let 
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

console.log(merge(nums1, m, nums2, n));
console.log(nums1);
