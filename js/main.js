$(function() {
  var gameState = TTTGame();

  $('td').on('click',function(e) {
    var clickedTdId = e.target.id;

    gameState.updateTttBoard(clickedTdId);
    gameState.updateCurrPlayerTurn();
  });
}
