/**
 * There are three types of edits that can be performed on strings: 
 * insert a character, remove a character, or replace a character. 
 * Given two strings, write a function to check if they are one edit (or zero edits) away.
 * 
 * example: 
 * pale, ple -> true 
 * pales, pale -> true 
 * pale, bale -> true 
 * pale, bae -> false
 * 
 */

const oneAway = (str1, str2) => {
  let len1 = str1.length;
  let len2 = str2.length;
  
    // check for replacement
    if (len1 === len2) {
        let replacement = 0;
        for (let i = 0; i < len1; i++) {
            if (str1[i] !== str2[i]) {
                replacement++;
                if (replacement > 1) {
                    return false
                }
            }
        }
        return true
    }

    // check for removal/insertion
    let longerStr = len1 >= len2 ? str1 : str2;
    let otherStr = longerStr === str1 ? str2 : str1;
    if (longerStr.length - otherStr.length > 1){
      return false;
    }
    for (let i = 0; i < otherStr.length; i++) {
        if (otherStr[i] !== longerStr[i]) {
            if (otherStr[i] !== longerStr[i + 1]) {
                return false
            }
        }
    }
    return true
}