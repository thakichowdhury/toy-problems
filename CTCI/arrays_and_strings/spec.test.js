const { createMatrix, isMatrix } = require('./util');

describe('isUniqueChars', () => {
  const isUniqueChars = require('./isUniqueChars');
  it('should return false when string has duplicate chars', () => {
    expect(isUniqueChars('cat in hat')).toBe(false);
  })

  it('should return true when given an empty string', () => {
    expect(isUniqueChars('')).toBeTruthy();
  })

  it('should return true when passed a string with a length of 1', () => {
    expect(isUniqueChars('a')).toBeTruthy();
  })

  it('should return true when given a string with non-repeating chars', () => {
    expect(isUniqueChars('abcd efg')).toBeTruthy();
  })
})

describe('checkPermute', () => {
  const checkPermute = require('./checkPermute');
  it('should return false when given an empty string', () => {
    expect(checkPermute('', '')).toBe(false);
  })

  it('should return false when given two strings with different lengths', () => {
    expect(checkPermute('sss', 'ssss')).toBe(false);
  })

  it('should return true when given two strings where one is a permutation of the other', () => {
    expect(checkPermute('cat', 'cta')).toBeTruthy();
  })
})

describe('URLify', () => {
  const URLify = require('./URLify');
  const string = 'Mr John Smith    ';
  const expected = 'Mr%20John%20Smith';

  it('should return a string that has no spaces', () => {
    expect(URLify(string, 13)).toBe(expected);
  })
})

describe('isPermutationOfPalindrome', () => {
  const isPermutationOfPalindrome = require('./isPermutationOfPalindrome');
  const notPermutationOfPal = 'Tract Coa';
  const isPermutationOfPal = 'Tact Coa';

  it('should return false when given a string that is not a permutation of a palindrome', () => {
    expect(isPermutationOfPalindrome(notPermutationOfPal)).toBe(false);
  })

  it('should return true when given a permutation of a palindrome', () => {
    expect(isPermutationOfPalindrome(isPermutationOfPal)).toBeTruthy();
  })
})

// FIX algorithm

// describe('oneEditAway', () => {
//   const oneEditAway = require('./oneEditAway');

//   it('should return false when given two strings that have common chars at different indexes', () => {
//     expect(oneEditAway('pal', 'lap')).toBe(false);
//   })

//   it('should return false when given two strings that have more than one char not in common', () => {
//     expect(oneEditAway('pale', 'plezq')).toBe(false);
//   })

//   it('should return true when given an empty string', () => {
//     expect(oneEditAway('', '')).toBeTruthy();
//   })

//   it('should return true when given two strings that have one char not in common', () => {
//     expect(oneEditAway('pale', 'ple')).toBeTruthy();
//   })

//   it(`it should return false if there's more than one char that needs to be replaced`, () => {
//     expect(oneEditAway('pal', 'pez')).toBe(false);
//   })
// })

describe('stringCompression', () => {
  const stringCompression = require('./stringCompression');

  it('should return an empty string if given an empty string', () => {
    expect(stringCompression('')).toBe('');
  })

  it(`should return the original string if it can't be compressed`, () => {
    expect(stringCompression('abbcd')).toBe('abbcd');
  })

  it(`should return a string with chars and their counts`, () => {
    expect(stringCompression('aabcccccaaa')).toBe('a2b1c5a3');
  })
});

describe('rotateMatrix', () => {
  const rotateMatrix = require('./rotateMatrix');

  it(`should return an array`, () => {
    expect(
      Array.isArray(rotateMatrix(createMatrix(3)))
    ).toBe(true);
  })

  it(`should return a NxN matrix`, () => {
    expect( isMatrix(rotateMatrix(createMatrix(3))) )
      .toBeTruthy();
  })

  it(`should return a matrix rotated from the input`, () => {
    expect( rotateMatrix(createMatrix(3)) )
      .toEqual( [[6, 3, 0], [7, 4, 1], [8, 5, 2]] )
  })

  // it(`should return the same matrix rotated in place`, () => {
  //   expect()
  // })
});

describe(`zeroMatrix`, () => {
  const zeroMatrix = require('./zeroMatrix');

  it(`should return an Array`, () => {
    expect( Array.isArray(zeroMatrix(createMatrix(3))) )
      .toBeTruthy();
  })

  it(`should return a matrix`, () => {
    expect( isMatrix(zeroMatrix(createMatrix(3))) )
      .toBeTruthy();
  })

  it(`should return a matrix with zeros for rows where there was a zero in the input matrix`, () => {
    expect( zeroMatrix([[1, 2, 0, 4]]) )
      .toEqual( [[0, 0, 0, 0]] );
  })

  it(`should return a matrix with zeros for the rows and columns where there was a zero in the input matrix`, () => {
    expect( zeroMatrix([[1, 2, 0, 4], [5, 6, 7, 8]]) )
      .toEqual( [[0, 0, 0, 0], [5, 6, 0, 8]] );
  })
})

describe(`stringRotation`, () => {
  const stringRotation = require('./stringRotation');
  const str = 'waterbottle';
  const str2 = 'erbottlewat';

  it(`should return a boolean`, () => {
    expect(typeof stringRotation(str, str2)).toBe('boolean');
  })

  it(`should return false when both strings are the same`, () => {
    expect(stringRotation(str, 'waterbottle')).toBe(false);
  })

  it('should return false when a string is not a rotation of the other', () => {
    expect(stringRotation(str, 'erbottlewzt')).toBe(false);
  })

  it('should return true when a string is a rotated version of the other', () => {
    expect(stringRotation(str, str2)).toBeTruthy();
  })
})
