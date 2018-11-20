// i: Array<Array<int>> NxN
// o: Array<Array<int>> rotated input
// e: N = 0 || 1;
// c: mvp -> rotate in place

const rotateMatrix = matrix => {
  const result = [];
  for (let i  = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = matrix.length - 1; j >= 0; j--) {
      result[i].push(matrix[j][i]);
    }
  }
  return result;
}

// time-complexity: O(n^2)
// space-complexity: O(n);

// const rotateMatrix = matrix => {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = matrix.length - 1; j >= 0; j--) {
//       let k = i;
//       const hold = matrix[k][j];
//       matrix[i][k] = matrix[j][i]
//     }
//   }
// }

module.exports = rotateMatrix;