var TTTGame = function () {
  var currPlayerTurn = 1,
      numOfWin = {playerOne: 0, playerTwo: 0}

  function updateCurrPlayerTurn() {
    if (currPlayerTurn === 1) {
      return currPlayerTurn++;
    }
    return currPlayerTurn--;
  }

  function resetGame() {
    currPlayerTurn = 1,
    numOfWin.playerOne = 0,
    numOfWin.playerTwo = 0;
  }

  function getCurrPlayerTurn() {
    return currPlayerTurn;
  }

  return {
    getCurrPlayerTurn: getCurrPlayerTurn,
    updateCurrPlayerTurn: updateCurrPlayerTurn,
    resetGame: resetGame
  }
};
