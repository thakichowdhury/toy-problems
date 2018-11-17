// i: String
// o: String
// e: string is empty, string can't be compressed further
// c: n/a

// Q: do spaces count as chars in this?
// A: for this exercise, no

// initialize a holding string
// initialize a charCount hash table
// iterate through each char in the string
  // if the char is not in charCount
    // add it as a key and assign it 1
  // else
    // increment the value of char at charCount
// iterate through the string
  // if holding string doesn't includes char
    // add char and its count to holding
// if the length of holding is less than the length of the input string
  // return holding
// else
  // return the input string

const stringCompression = str => {
  let holding = '';
  let count = 0;
  const strArr = str.split('');

  strArr.forEach((char, i) => {
    count += 1;
    if (char !== str[i + 1]) {
      holding += char + count.toString();
      count = 0;
    }
  });

  return holding.length < str.length ? holding : str;
}

// time-complexity: O(n)
// space-complexity: O(1)

module.exports = stringCompression;
