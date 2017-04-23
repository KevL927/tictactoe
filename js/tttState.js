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

  function getCurrPlayerTurn() {
    return currPlayerTurn;
  }

  function updateTttBoard(location) {
    var indexOfArray = location.slice(0,1),
        indexOfArrayOfArrays = location.slice(-1);

    if (currPlayerTurn === 1 && tttBoard[indexOfArray][indexOfArrayOfArrays] === null) {
      return tttBoard[indexOfArray][indexOfArrayOfArrays] = 'O';
    } else if (tttBoard[indexOfArray][indexOfArrayOfArrays] === null) {
      return tttBoard[indexOfArray][indexOfArrayOfArrays] = 'X';
    }
  }

  function getTttBoard() {
    return tttBoard;
  }

  function updateIsWinner(winnerInfo) {
    if (winnerInfo === 'OOO') {
      isWinner = 'Player 1';
      numOfWin.playerOne++;
    } else if (winnerInfo === 'XXX') {
      isWinner = 'Player 2';
      numOfWin.playerTwo++;
    } else if (winnerInfo === 'tie') {
      isWinner = 'No One';
    }
  }

  function getIsWinnerStatus() {
    return isWinner;
  }

  function resetGame() {
    currPlayerTurn = 1,
    tttBoard = [[null, null, null],[null, null, null],[null, null, null]],
    numOfWin = {playerOne: 0, playerTwo: 0};
  }

  return {
    updateCurrPlayerTurn: updateCurrPlayerTurn,
    getCurrPlayerTurn: getCurrPlayerTurn,
    updateTttBoard: updateTttBoard,
    getTttBoard: getTttBoard,
    resetGame: resetGame
  }
};
