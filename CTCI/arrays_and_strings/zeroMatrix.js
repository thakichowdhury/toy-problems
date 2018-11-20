// i: MxN matrix Array<Array<any>>
// o: MxN matrix Array<Array<any>>
// e: MxN = 0 or 1 || M or N = 0 or 1
// c: n/a

// create a holding hashtable
// iterate through each row in the matrix
  // if an element in the matrix is a zero
    // record the row and col in holding
// iterate through each row in the matrix
  // if the row is recorded in holding
    // replace each element with a zero
  // else
    // if the element col is in holding
      // replace that elem with a zero
// return the matrix

const zeroMatrix = matrix => {
  const holding = {
    row: [],
    col: [],
  };
  // collect rows and cols of elems that are zero
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        holding.row.push(row);
        holding.col.push(col);
      }
      if (holding.row.includes(row) || holding.col.includes(col)) {
        matrix[row].splice(col, 1, 0);
      }
    }
    if (holding.row.includes(row)) {
      for (let col = 0; col < matrix[row].length; col++) {
        matrix[row].splice(col, 1, 0);
      }
    }
  }
  return matrix;
}

// time-complexity: O(MN + Nr) where r is the number of rows in original matrix with zeros
// space-complexity: O(1)

module.exports = zeroMatrix;
