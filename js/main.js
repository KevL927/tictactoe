function checkWinner (tttBoard) {
  var i = 0,
      j = 0,
      k = 0,
      isNull = false,
      vertical = '',
      horizontal = '';

  while(i <= 8) {
    if (i === 3 || i === 6) {
      if(compareCombinationCase(vertical, horizontal)) {
        return compareCombinationCase(vertical, horizontal);
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

  if(compareCombinationCase(vertical, horizontal, leftToRightDiag, rightToLeftDiag)) {
    return compareCombinationCase(vertical, horizontal, leftToRightDiag, rightToLeftDiag);
  }
  if (!isNull) return 'tie';
};

function compareCombinationCase (verticalCombination, horizontalCombination, leftToRightDiag, rightToLeftDiag) {
  if (verticalCombination === 'OOO' || verticalCombination === 'XXX') {
    return verticalCombination;
  } else if (horizontalCombination === 'OOO' || horizontalCombination === 'XXX') {
    return horizontalCombination;
  }

  if (leftToRightDiag === 'OOO' || leftToRightDiag === 'XXX') {
    return leftToRightDiag;
  } else if (rightToLeftDiag === 'OOO' || rightToLeftDiag === 'XXX') {
    return rightToLeftDiag;
  }
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

  render(gameState.getTttBoard(), gameState.getCurrPlayerTurn());

  $('td').on('click',function(e) {
    var clickedTd = e.target,
        clickedTdId = clickedTd.id,
        tdText = $(clickedTd).text();

    gameState.updateTttBoard(clickedTdId);

    if (tdText.length === 0) {
      gameState.updateCurrPlayerTurn();
    }

    render(gameState.getTttBoard(), gameState.getCurrPlayerTurn());
  });
});
