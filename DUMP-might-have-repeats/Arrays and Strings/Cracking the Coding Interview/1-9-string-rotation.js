/**
 * Check to see if one string is a rotation of another
 * 
 * calling includes once
 */

var stringRotation = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  return (string2 + string2).includes(string1);
};