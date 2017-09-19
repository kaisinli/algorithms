/*============================================================
O(n), n being the length of haystack, because of for loop.   

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