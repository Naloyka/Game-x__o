let players = ['x', 'o'];
let activePlayer = 0;
let playingField


function startGame() {
  activePlayer = players[0];
  playingField = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  renderBoard(playingField)
}


function click(row, col) {

  playingField[row][col] = activePlayer;
  renderBoard(playingField);

  for (let i = 0; i < playingField.length; i++) {
    if (playingField[i][0] == playingField[i][1] && playingField[i][2] == playingField[i][0] && playingField[i][0] != '') {
      showWinner(players.indexOf(activePlayer))
    }
    if (playingField[0][i] == playingField[1][i] && playingField[2][i] == playingField[0][i] && playingField[0][i] != '') {
      showWinner(players.indexOf(activePlayer))
    }

    if ((playingField[0][0] == playingField[1][1] && playingField[2][2] == playingField[0][0] && playingField[0][0] != '') || (playingField[0][2] == playingField[1][1] && playingField[2][0] == playingField[0][2] && playingField[0][2] != '')) {
      showWinner(players.indexOf(activePlayer))
    }
  }

  if (activePlayer == "x") {
    activePlayer = "o";
  }
  else activePlayer = "x";

}