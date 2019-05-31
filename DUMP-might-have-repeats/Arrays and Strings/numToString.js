const tens = {
	2: 'twenty',
	3: 'thirty',
	4: 'forty',
	5: 'fifty',
	6: 'sixty',
	7: 'seventy',
	8: 'eighty',
	9: 'ninety',
};

const teens = {
	11: 'eleven',
	12: 'twelve',
	13: 'thirteen',
	14: 'fourteen',
	15: 'fifteen',
	16: 'sixteen',
	17: 'seventeen',
	18: 'eighteen',
	19: 'nineteen',
};

const singles = {
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
};

const numToEnglish = num => {
	let str = num.toString();
	let answer = [];
	if (str.length === 3) {
		answer.push(singles[str[0]]);
		answer.push('hundred');
		str = str.substring(1);
	}

	if (!parseInt(str)) return answer.join(' ');

	if (str.length === 2) {
		if (parseInt(str[0]) === 0) answer.push(singles[str[1]]);
		else if (parseInt(str[0]) === 1) {
			if (parseInt(str[1]) === 0) answer.push('ten');
			else answer.push(teens[str]);
		} else {
			answer.push(tens[str[0]]);
			str = str.substring(1);
		}
	}

	if (str.length === 1) answer.push(singles[str[0]]);
 
	return answer.join(' ');
};