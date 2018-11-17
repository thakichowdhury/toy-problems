  // i: String,
  // o: boolean
  // e: string is empty
  // c: n/a

  // make a char array
  // iterate through each char in the string
    // if the char is found in the char array
      // remove that char from the array
    // else
      // push that char into the array
  // if the length of the array > 1
    // return false
  // else
    // return true

const isPermutationOfPalindrome = string => {
  const lowerCase = string.slice().toLowerCase();
  const charArr = [];
  for (let i = 0; i < lowerCase.length; i++) {
    const char = lowerCase[i];
    const charIndex = charArr.indexOf(char);
    if (charIndex !== -1) {
      charArr.splice(charIndex, 1);
    } else if (char !== ' ') {
      charArr.push(char);
    }
  }
  return charArr.length <= 1;
}

// time-complexity: O(n)
// space-complexity: O(1);

module.exports = isPermutationOfPalindrome;
