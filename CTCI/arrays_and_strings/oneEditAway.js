// i: two Strings
// o: boolean
// e: empty string
// c: n/a

// Q: do spaces count as chars in this?
// for this scenario, no

// create a char array
// iterate through all the chars in both strings
  // if the char exists in the char array
    // remove char from char array
  // else
    // push char into char array
// if char array has a length <= 2
  // return true
// else
  // return false

var oneEditAway = (str, str2) => {
  var diffCount = 0;
  var longerStr = str.length > str2.length ? str : str2;
  var shorterStr = str2.length < str.length ? str2 : str;
  longerStr = longerStr.split('');
  shorterStr = shorterStr.split('');

  for (let i = 0; i < longerStr.length; i++) {
    if (diffCount > 1) {
      return false;
    }
    var char = longerStr[i];

    if (longerStr[i] !== shorterStr[i]) {
      longerStr.splice(i, 1);
      diffCount++;
      i = i - 1;
    }
  }
  return true;
}

// time-complexity: O(n)
// space-complexity: O(1)

module.exports = oneEditAway;
