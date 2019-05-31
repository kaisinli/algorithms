const exponent = (power, num) => {
	if (power === 1) {
		return num;
	}

	return num * exponent(power - 1, num);
}