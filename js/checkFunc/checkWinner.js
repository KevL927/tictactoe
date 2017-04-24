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
