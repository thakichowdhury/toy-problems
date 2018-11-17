/*

1.1
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?

*/

const isUniqueChars = string => {
  // i: String
  // o: Boolean
  // c: no additional data structures
  // e: string is empty or only has one char

  if (string.length < 2) {
    return true;
  }

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[j] === string[i]) {
        return false;
      }
    }
  }
  return true;
}

// time-complexity: O(n(n + 1)/2) => O(n^2)
// space-complexity: O(1)

module.exports = isUniqueChars;
