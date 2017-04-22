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
