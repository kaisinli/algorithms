// Write a function to find the longest common prefix string amongst an array of strings.

var longestCommonPrefix = function(strs) {
    // strs is an array of strings
    
    var prefix = strs[0] ? strs[0] : '';
    strs = strs.slice(1, strs.length);
    for (var str of strs){
        if(prefix.length > str.length) {
          prefix = prefix.slice(0, str.length);
        }
        
        for(var i=0; i<str.length; i++){
          if(str[i] !== prefix[i]){
            prefix = prefix.slice(0, i);
            break;
          }
        }
    }
           
    return prefix;
};