function otherProduct(arr) {
	// product of all elems
	let allProduct = 1;
	let zeros = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			allProduct *= arr[i];
		} else {
			zeros++;
		}
	}

	let answer = [];

	for (let j = 0; j < arr.length; j++) {
		if (zeros > 1 || (arr[j] !== 0 && zeros === 1)) answer.push(0);
		else if (arr[j] === 0) answer.push(allProduct);
		else answer.push(allProduct / arr[j]);
	}

	return answer;
}