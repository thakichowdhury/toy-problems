const URLify = (string, trueLength) => {
  // i: String, with spaces
  // o: String, with all spaces
  // e: string is empty
  // c: n/a

  let result = '';

  for (let i = 0; i < trueLength; i++) {
    const char = string[i];
    if (char === ' ') {
      result += '%20';
    } else {
      result += char;
    }
  }
  return result;
};

module.exports = URLify;