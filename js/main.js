$(function() {
  const gameState = TTTGame(),
        getNumOfWin = gameState.getNumOfWin();

  function tdClickHandler (e) {
    var clickedTd = e.target,
        clickedTdId = clickedTd.id,
        tdText = $(clickedTd).text(),
        getTttBoard = gameState.getTttBoard();

    gameState.updateTttBoard(clickedTdId);
    if (tdText.length === 0) gameState.updateCurrPlayerTurn();
    gameState.updateIsWinner(checkWinner(getTttBoard, checkCombination));
    renderBoardAndPlayerTurn(getTttBoard, gameState.getCurrPlayerTurn());
    if(checkWinner(getTttBoard, checkCombination)) {
      renderScore('player-one', getNumOfWin.playerOne);
      renderScore('player-two', getNumOfWin.playerTwo);
    };
  }

  function setNewAndResetGameSetting (tttBoard, currPlayerTurn) {
    $('td').on('click', tdClickHandler);
    $('.buttons').css('visibility', 'hidden');
    $('.player-display').text('Player turn: 1');
    renderBoardAndPlayerTurn(tttBoard, currPlayerTurn);
  }

  $('.score').on('DOMSubtreeModified',function(){
    $('td').off();
    $('.buttons').css('visibility', 'visible');
    $('.player-display').text(gameState.getIsWinnerStatus() + ' Won!');
  });

  $('.new-game').on('click', function (e) {
    gameState.newGame();
    setNewAndResetGameSetting(gameState.getTttBoard(), gameState.getCurrPlayerTurn());
  });

  $('.reset-game').on('click', function (e) {
    gameState.resetGame();
    renderScore('player-one', getNumOfWin.playerOne);
    renderScore('player-two', getNumOfWin.playerTwo);
    setNewAndResetGameSetting(gameState.getTttBoard(), gameState.getCurrPlayerTurn());
  });

  $('td').on('click', tdClickHandler);
});
