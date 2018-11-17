/*

Given two strings, write a method to decie if one is a permutation of the other.

*/

const checkPermute = (str, str2) => {
  // i: String, String,
  // o: boolean

  if (str === str2 || str.length !== str2.length) {
    return false;
  }
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    strChar = str[i];
    str2Char = str2[i];
    if (!charCount[strChar]) {
      charCount[strChar] = 1;
    } else if (!charCount[str2Char]) {
      charCount[str2Char] = 1;
    } else {
      charCount[str2Char]++;
      charCount[strChar]++;
    }
  }
  for (let count in charCount) {
    if (count % 2) {
      return false;
    }
  }
  return true;
};

// time-complexity: O(n)
// space-complexity: O(1)

module.exports = checkPermute;
