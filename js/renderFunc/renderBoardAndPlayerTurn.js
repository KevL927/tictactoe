const renderBoardAndPlayerTurn = (tttBoard, playerTurn) => {
  let i = 0,
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
};
