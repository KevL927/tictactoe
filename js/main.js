function checkWinner (tttBoard, callback) {
  var i = 0,
      j = 0,
      k = 0,
      isNull = false,
      vertical = '',
      horizontal = '';

  while(i <= 8) {
    if (i === 3 || i === 6) {
      if(callback (vertical) || callback (horizontal)) {
        return callback (vertical) || callback (horizontal);
      }
      k = 0;
      j++;
      vertical = '';
      horizontal = '';
    }
    if (tttBoard[j][k] === null) isNull = true;

    horizontal += tttBoard[j][k];
    vertical += tttBoard[k][j];

    k++;
    i++;
  }
  var leftToRightDiag = tttBoard[0][0] + tttBoard[1][1] + tttBoard[2][2],
      rightToLeftDiag = tttBoard[0][2] + tttBoard[1][1] + tttBoard[2][0];

  if (!isNull) return 'tie';

  return callback (vertical) || callback (horizontal) || callback (leftToRightDiag) || callback (rightToLeftDiag)
};

function checkCombination (combination) {
  if (combination === 'OOO' || combination === 'XXX') {
    return combination;
  }
}

function renderScore (playerScoreClassName, playerScore) {
  $('.' + playerScoreClassName).text(playerScore);
}

function render (tttBoard, playerTurn) {
  var i = 0,
      j = 0,
      k = 0;

  while(i <= 8) {
    if(i === 3 || i === 6) {
      k = 0;
      j++;
    }

    $('#' + j + '-' + k).text(tttBoard[j][k]);
    k++;
    i++;
  }
  $('.player-turn').text(playerTurn);
}

$(function() {
  var gameState = TTTGame();

  function tdClickHandler (e) {
    var clickedTd = e.target,
        clickedTdId = clickedTd.id,
        tdText = $(clickedTd).text();

    gameState.updateTttBoard(clickedTdId);
    if (tdText.length === 0) gameState.updateCurrPlayerTurn();
    gameState.updateIsWinner(checkWinner(gameState.getTttBoard(), checkCombination));
    render(gameState.getTttBoard(), gameState.getCurrPlayerTurn());
    if(checkWinner(gameState.getTttBoard(), checkCombination)) {
      renderScore('player-one', gameState.getNumOfWin().playerOne);
      renderScore('player-two', gameState.getNumOfWin().playerTwo);
    };
  }

  function setNewAndResetGameSetting (tttBoard, currPlayerTurn) {
    $('td').on('click', tdClickHandler);
    $('.buttons').hide();
    $('.player-display').text('Player turn: 1');
    render(tttBoard, currPlayerTurn);
  }

  $('.score').on('DOMSubtreeModified',function(){
    $('td').off();
    $('.buttons').show();
    $('.player-display').text(gameState.getIsWinnerStatus() + ' Won!');
  });

  $('.new-game').on('click', function (e) {
    gameState.newGame();
    setNewAndResetGameSetting(gameState.getTttBoard(), gameState.getCurrPlayerTurn());
  });

  $('.reset-game').on('click', function (e) {
    gameState.resetGame();
    renderScore('player-one', gameState.getNumOfWin().playerOne);
    renderScore('player-two', gameState.getNumOfWin().playerTwo);
    setNewAndResetGameSetting(gameState.getTttBoard(), gameState.getCurrPlayerTurn());
  });

  $('td').on('click', tdClickHandler);
});
