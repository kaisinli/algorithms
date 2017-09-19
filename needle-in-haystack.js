// -------------------< solution one >----------------------//
/*============================================================
CASES:

haystack            needle          expected output
''                  ''              0
''                  '11'            -1
'11'                ''              0
============================================================*/

function strStr(haystack, needle) {
  var needleLength = needle.length;
  var haystackLength = haystack.length;
  var diff = haystackLength - needleLength;

  function cutHay(str, a, b) {
    return str.slice(a, a + b)
  }

  if (diff < 0) return -1;
  else if (needleLength === 0) return 0;

  var check = cutHay(haystack, i, needleLength) === needle;

  for (var i = 0; i <= diff; i++) {
    if (haystack[i] === needle[0] && check === true) {
      return i;
    } else if (i === diff) {
      return -1;
    }
  }
}

// -------------------< solution two >----------------------//
/*============================================================
O(n*m)
Does not work for the following

CASES:

haystack            needle          expected output
''                  ''              0
============================================================*/

function indexOf (needle, haystack) {
  for (var hIdx = 0; hIdx <= haystack.length - needle.length; hIdx++) {
    for (var nIdx = 0; nIdx < needle.length; nIdx++) {
      if (haystack[hIdx + nIdx] !== needle[nIdx]) break;
      if (nIdx + 1 === needle.length) return hIdx;
    }
  }
  return -1;
}


// -----------------< solution three >---------------------//

/*============================================================
Look into 

https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string_search_algorithm#The_Galil_Rule

for O(m+n) time, m is length of haystack and n is length of needle
============================================================*/
