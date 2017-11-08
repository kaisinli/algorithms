// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?

function isUnique(str) {
    var hash = {};

    for (var i = 0; i < str.length; i++) {
        if (hash[str[i]]) return false;
        else {
            hash[str[i]] = true;
        }

        if (i === str.length - 1) return true;
    }
}

// The time complexity for this code is O( n), where n is the length ofthe string. The space complexity is O( 1).

