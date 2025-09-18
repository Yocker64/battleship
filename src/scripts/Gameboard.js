/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
class Gameboard {
  constructor() {
    this.board = {
      0: createEmptyRow(),
      1: createEmptyRow(),
      2: createEmptyRow(),
      3: createEmptyRow(),
      4: createEmptyRow(),
      5: createEmptyRow(),
      6: createEmptyRow(),
      7: createEmptyRow(),
      8: createEmptyRow(),
      9: createEmptyRow(),
    };
  }

  placeShips(shipLength, xCoor, yCoor) {
    if (yCoor + shipLength < 11 || xCoor < 10) {
      for (let i = 0; i < shipLength; i++) {
        this.board[yCoor + i][xCoor] = 'S';
      }
    }
  }

  printBoard() {
    for (let index = 0; index < 10; index++) {
      let row = '';
      for (let index2 = 0; index2 < 10; index2++) {
        row += this.board[index][index2];
      }
      console.log(row);
    }
  }
}

function createEmptyRow() {
  return {
    0: 'e',
    1: 'e',
    2: 'e',
    3: 'e',
    4: 'e',
    5: 'e',
    6: 'e',
    7: 'e',
    8: 'e',
    9: 'e',
  };
}
