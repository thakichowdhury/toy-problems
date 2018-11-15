var board = [
  [
    {hasMine: false, adjacentMines: 0}, {hasMine: false, adjacentMines: 0}, {hasMine: false, adjacentMines: 0}, {hasMine: false, adjacentMines: 0}
  ],
  [
    {hasMine: false, adjacentMines: 0}, {hasMine: false, adjacentMines: 0}, {hasMine: true, adjacentMines: 0}, {hasMine: false, adjacentMines: 0}
  ],
  [
    {hasMine: false, adjacentMines: 0}, {hasMine: false, adjacentMines: 0}, {hasMine: false, adjacentMines: 0}, {hasMine: false, adjacentMines: 0}
  ],
  [
    {hasMine: false, adjacentMines: 0}, {hasMine: true, adjacentMines: 0}, {hasMine: false, adjacentMines: 0}, {hasMine: false, adjacentMines: 0}
  ]
];

function minesweeper(row, col) {
// i: Object
// o: side effect, changes affected nodes to visible

// if the cell is off the board
  // return
// check each of the input cells neighbors
  // if there are neighbors with mines
    // change the cell to the number of neighbors w/ mines
  // else
    // run the operation on each of the neighbors

  const rowExists = row >= 0 && row <= board.length;
  const colExists = col >= 0 && col <= board.length;

  if (!rowExists || !colExists) {
    return;
  }

  const cell = board[row][col];

  if(cell.visited) {
    return;
  }

  const mines = checkAdjacent(row, col);
  cell.visited = true;

  if (!cell.adjacentMines) {
    checkAdjacent(row, col, minesweeper);
  }
};

function checkAdjacent(row, col, callback) {
  const cell = board[row][col];
  let yc = row - 1;
  for (let i = 0; i < 3; i++) {
    checkRow(yc, col, cell, callback);
    yc++;
  }
  return cell.adjacentMines;
}

function identity(val) {
  return val;
}

function checkRow(row, col, cell, callback=identity) {
  // i: int /row/, int /col/
  // o: int /total number of mines for the cell and each horizontal side/
  const currentRow = board[row];
  let count = 0;

  if (currentRow) {
    for (let i = col - 1; i <= col + 1; i++) {
      callback(row, i);
      cell.adjacentMines += mines(currentRow[i]);
    }
  }
  console.log(board);
};

function mines(node) {
  if (node) {
    return node.hasMine ? 1 : 0;
  }
  return 0;
}
