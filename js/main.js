function render (tttBoard) {
    var i = 0,
        j = 0,
        k = 0;

    while(i <= 8) {
      if(i === 3 || i === 6) {
        k = 0;
        j++;
      }

      $('#' + j + '-' + k).html(TttBoard[j][k]);
      k++;
      i++;
    }
}

$(function() {
  var gameState = TTTGame();

  $('td').on('click',function(e) {
    var clickedTdId = e.target.id;

    gameState.updateTttBoard(clickedTdId);
    gameState.updateCurrPlayerTurn();
    render(gameState.tttBoard());
  });
}
