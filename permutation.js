/*prompt: 

Given a string, return an array of all the permutations of that string. 
The permutations of the string should be the same length as the original 
string (i.e. use each letter in the string exactly once) but do not need 
to be actual words. 

The array that is returned should only contain unique values and its elements 
should be in alphabetical order. 
*/

// permutations problems will tend to be factorial time and space complexity

function stringPermutations(str) {
    //str is sorted 
    if (str.length === 1) return [str];
    const all = [];
    let i = 0;

    while (i < str.length) {
        const letter = str[i];
        const otherChars = str.slice(0, i) + str.slice(i + 1);

        stringPermutations(otherChars).forEach(submpermut => {
            all.push(letter + submpermut);
        });

        while (str[i] === letter) i++;
    }
    return all;
}

function sortedStringPermutations(str) {
    const sortedStr = str.split('').sort().join('');
    return stringPermutations(sortedStr);
}
