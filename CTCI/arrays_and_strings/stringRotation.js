// i: two Strings
// o: boolean
// e: strings are same
// c: n/a

const stringRotation = (str, str2) => {
  const double = str + str;
  return str === str2 ? false : double.includes(str2);
}

// time-complexity: O(n)
// space-complexity: O(1)

module.exports = stringRotation;
