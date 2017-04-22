var TTTGame = function () {
  var currPlayerTurn = 1,
      tttBoard = [[null, null, null],[null, null, null],[null, null, null]],
      numOfWin = {playerOne: 0, playerTwo: 0};

  function updateCurrPlayerTurn() {
    if (currPlayerTurn === 1) {
      return currPlayerTurn = 2;
    }
    return currPlayerTurn = 1;
  }

  function resetGame() {
    currPlayerTurn = 1,
    tttBoard = [[null, null, null],[null, null, null],[null, null, null]],
    numOfWin = {playerOne: 0, playerTwo: 0};
  }

  function getCurrPlayerTurn() {
    return currPlayerTurn;
  }

  function updateTttBoard(location) {
    var indexOfArray = location.slice(0,1),
        indexOfArrayOfArrays = location.slice(-1);

    if (currPlayerTurn === 1) {
      console.log(tttBoard);
      return tttBoard[indexOfArray][indexOfArrayOfArrays] = 'O';
    }
      return tttBoard[indexOfArray][indexOfArrayOfArrays] = 'X';
  }

  function getTttBoard() {
    return tttBoard;
  }

  return {
    getCurrPlayerTurn: getCurrPlayerTurn,
    updateCurrPlayerTurn: updateCurrPlayerTurn,
    resetGame: resetGame
  }
};
