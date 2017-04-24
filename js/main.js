$(() => {
  const gameState = TTTGame();

  const tdClickHandler = e => {
    const clickedTd = e.target,
          clickedTdId = clickedTd.id,
          tdText = $(clickedTd).text(),
          getTttBoard = gameState.getTttBoard();

    gameState.updateTttBoard(clickedTdId);
    //Execute updateCurrPlayerTurn function if the clicked td detects new text (O or X)
    if (tdText.length === 0) gameState.updateCurrPlayerTurn();
    gameState.updateIsWinner(checkWinner(getTttBoard, checkCombination));
    renderBoardAndPlayerTurn(getTttBoard, gameState.getCurrPlayerTurn());
    //Execute only if someone wins the game
    if(checkWinner(getTttBoard, checkCombination)) {
      renderScore('player-one', gameState.getNumOfWin().playerOne);
      renderScore('player-two', gameState.getNumOfWin().playerTwo);
    };
  };

  const setNewAndResetGameSetting = (tttBoard, currPlayerTurn) => {
    $('td').on('click', tdClickHandler);
    $('.buttons').css('visibility', 'hidden');
    $('.player-display').text('Player turn: 1');
    renderBoardAndPlayerTurn(tttBoard, currPlayerTurn);
  };

  //Execute if there's a change of DOM in element with score class
  $('.score').on('DOMSubtreeModified', () => {
    //Turn off event listener for td
    $('td').off();
    $('.buttons').css('visibility', 'visible');
    $('.player-display').text(gameState.getIsWinnerStatus() + ' Won!');
  });

  $('td').on('click', tdClickHandler);

  $('.new-game').on('click', e => {
    gameState.newGame();
    setNewAndResetGameSetting(gameState.getTttBoard(), gameState.getCurrPlayerTurn());
  });

  $('.reset-game').on('click', e => {
    gameState.resetGame();
    renderScore('player-one', gameState.getNumOfWin().playerOne);
    renderScore('player-two', gameState.getNumOfWin().playerTwo);
    setNewAndResetGameSetting(gameState.getTttBoard(), gameState.getCurrPlayerTurn());
  });
});
