/*============================================================
O(n), n being the length of haystack, because of for loop.   

SPECIAL CASES:

haystack            needle          expected output
''                  ''              0
''                  '11'            -1
'11'                ''              0
============================================================*/

debugger;

function strStr (haystack, needle) {
  var needleLength = needle.length;           
  var haystackLength = haystack.length;       
  var diff = haystackLength - needleLength;   

  function cutHay (str, a, b) {
    return str.slice(a, a+b)
  }
  
  switch (diff) {
    case haystackLength:
      return 0;
    case -needleLength:
      return -1;
    default:
      for (var i = 0; i<= diff; i++) {
        if (haystack[i] === needle[0]) {
          if (cutHay(haystack, i, needleLength) === needle) return i;
          else if (i === diff) return -1;
        }
      };
  }
}