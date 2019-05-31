const firstNotRepeatingCharacter = (s) => {
    let hash = {};
    
    for (let i = 0; i < s.length; i++) {
        let letter = s.charAt(i);
        if (hash[letter]) {
            hash[letter] += 1;
        }
        else {
        hash[letter] = 1;
        }
    }

    for (let prop in hash) {
        if (hash[prop] === 1) {
            return prop;
        }
    }

    return '_';
}