const TTTGame = () => {
  let currPlayerTurn = 1,
      tttBoard = [[null, null, null],[null, null, null],[null, null, null]],
      isWinner = null,
      numOfWin = {playerOne: 0, playerTwo: 0};

  const updateCurrPlayerTurn = () => {
    if (currPlayerTurn === 1) {
      return currPlayerTurn = 2;
    }
    return currPlayerTurn = 1;
  }

  const getCurrPlayerTurn = () => {
    return currPlayerTurn;
  }

  const updateTttBoard = location => {
    const indexOfArray = location.slice(0,1),
        indexOfArrayOfArrays = location.slice(-1);

    if (currPlayerTurn === 1 && tttBoard[indexOfArray][indexOfArrayOfArrays] === null) {
      return tttBoard[indexOfArray][indexOfArrayOfArrays] = 'O';
    } else if (tttBoard[indexOfArray][indexOfArrayOfArrays] === null) {
      return tttBoard[indexOfArray][indexOfArrayOfArrays] = 'X';
    }
  }

  const getTttBoard = () => {
    return tttBoard;
  }

  const updateIsWinner = winnerInfo => {
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

  const getIsWinnerStatus = () => {
    return isWinner;
  }

  const getNumOfWin = () => {
    return numOfWin;
  }

  const newGame = () => {
    currPlayerTurn = 1,
    tttBoard = [[null, null, null],[null, null, null],[null, null, null]],
    isWinner = null;
  }

  const resetGame = () => {
    currPlayerTurn = 1,
    tttBoard = [[null, null, null],[null, null, null],[null, null, null]],
    isWinner = null,
    numOfWin = {playerOne: 0, playerTwo: 0};
  }

  return {
    updateCurrPlayerTurn: updateCurrPlayerTurn,
    getCurrPlayerTurn: getCurrPlayerTurn,
    updateTttBoard: updateTttBoard,
    getTttBoard: getTttBoard,
    updateIsWinner: updateIsWinner,
    getIsWinnerStatus: getIsWinnerStatus,
    getNumOfWin: getNumOfWin,
    newGame: newGame,
    resetGame: resetGame
  }
};
