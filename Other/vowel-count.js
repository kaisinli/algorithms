function vowelCount(string){
	var vowels = 'aeiou',			
			testString = string.toLowerCase(),
			count = 0;

	for(var i = 0; i < string.length; i++){
		if(vowels.indexOf(string[i]) >= 0){
			count++;
		}
	}

	return count;
}

// O(n), n is length of the word