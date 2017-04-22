$(function() {
  var gameState = TTTGame();

  $("td").click(function() {
    var currPlayerTurnClassName = "player-" + gameState.getCurrPlayerTurn(),
        clickedTd = $("." + this.className);

    clickedTd.addClass(currPlayerTurnClassName);
    gameState.updateCurrPlayerTurn();
  });
});
