// Write a function to find the longest common prefix string amongst an array of strings.

function longestCommonPrefix(strs) {
  // strs is an array of strings

  let prefix = strs[0] ? strs[0] : '';
  for (let str of strs) {
    if (prefix.length > str.length) {
      prefix = prefix.slice(0, str.length);
    }

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== prefix[i]) {
        prefix = prefix.slice(0, i);
        break;
      }
    }
  }

  return prefix;
};