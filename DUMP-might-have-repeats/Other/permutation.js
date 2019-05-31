/*prompt: 

Given a string, return an array of all the permutations of that string. 
The permutations of the string should be the same length as the original 
string (i.e. use each letter in the string exactly once) but do not need 
to be actual words. 

The array that is returned should only contain unique values and its elements 
should be in alphabetical order. 
*/

// permutations problems will tend to be factorial time and space complexity

// finds all possible permutations *while* maintaining the order of the characters
function stringPermutations (str) {
  if (str.length === 1) return [str]; // base case
  const all = [];

  // go through each character in the string
  let i = 0;
  while (i < str.length) {

    // get each individual character
    const letter = str[i];

    // get all the other characters
    const otherChars = str.slice(0, i) + str.slice(i + 1);

    // compute all permutations of the *other* characters
    stringPermutations(otherChars).forEach(submpermut => {
      // add the current letter to the front of each of these "sub-permutations"
      // include *that* into the full result set
      all.push(letter + submpermut);
    });

    // increment until we reach a new letter (to avoid duplicates in the result set), there are can duplicate letter next to each other due to the fact that it is sorted
    while (str[i] === letter) i++;
  }

  return all;
}


function sortedStringPermutations (str) {
  // first sort the characters in the string
  const sortedStr = str.split('').sort().join('');
  // then find the ordered permutations of that sorted string
  return stringPermutations(sortedStr);
}