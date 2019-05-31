/**
 * Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. 
 * The palindrome does not need to be limited to just dictionary words.
 * 
 * EXAMPLE
 * Input: Tact Coa
 * Output: True (permutations:"taco cat'; "atco cta '; etc.)
 * 
 * strategy: 
 * 1. look at the problem, looks like spaces are negligible so get id of spaces
 * 3. case insensitive so make them all upper or lower case
 * 2. what is common in pelindrome: 
 *          - if string has even length: even number of of occurance of each character for all characters
 *              OR 
 *          - if string has odd length: all but one character has even number of occurance 
 * 
 */

const permOfPal = (str) => {
    let newStr = str.toLowerCase();
    let length = newStr.length;
    let hash = {};
    let oddTracker = 0;
    let spaceCounter = 0;

    for (let i = 0; i < length; i++) {
        if (newStr[i] === ' ') {
            spaceCounter++;
            continue;
        }

        if (hash[newStr[i]] === undefined) {
            hash[newStr[i]] = 1;
            oddTracker++;
        } else {
            hash[newStr[i]]++;
            if (hash[newStr[i]] % 2 !== 0) {
                oddTracker++;
            } else {
                oddTracker--;
            }
        }
    }

    if ((length-spaceCounter) % 2 === 0) {
        return oddTracker === 0 ? true : false;
    } else {
        return oddTracker === 1 ? true : false;
    }
}


// only one loops
