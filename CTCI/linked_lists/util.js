const getAllNodeValues = node => {
  const values = [];
  let n = node;
  while (n !== null) {
    values.push(n.value);
    n = n.next;
  }
  return values;
}

module.exports = {
  getAllNodeValues,
};
