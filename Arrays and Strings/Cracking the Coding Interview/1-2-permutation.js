// Given two strings, write a method to decide if one is a permutation of the
// other.

function perm(str1, str2) {
    var s1 = str1.split('').sort().join('')
    var s2 = str2.split('').sort().join('')

    if (s1 === s2) return true;
    else return false;
}