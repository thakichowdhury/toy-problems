  const createMatrix = n => {
    const result = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
      result.push([]);
      for (let j = 0; j < n; j++) {
        result[i].push(count);
        count++;
      }
    }
    return result;
  };

  const isMatrix = matrix => {
    if (!Array.isArray(matrix)) {
      return false;
    }
    return matrix.filter(el => Array.isArray(el)).length === matrix.length;
  };

  module.exports = {
    createMatrix,
    isMatrix,
  };
  