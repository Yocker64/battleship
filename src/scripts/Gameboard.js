/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */

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

  placeShips(shipLength, xCoor, yCoor, orientation) {
    if (orientation) {
      if (this.canPlace(shipLength, xCoor, yCoor, orientation) === true) {
        for (let i = 0; i < shipLength; i++) {
          this.board[yCoor + i][xCoor] = 'S';
        }
      } else {
        console.log('Could not place the ship');
      }
    } else if (this.canPlace(shipLength, xCoor, yCoor, orientation) === true) {
      for (let i = 0; i < shipLength; i++) {
        this.board[yCoor][xCoor + i] = 'S';
      }
    } else {
      console.log('Could not place the ship');
    }
  }

  // orientation = true for vertical and false for horizontal
  canPlace(shipLength, xCoor, yCoor, orientation) {
    if (orientation) {
      if (yCoor + shipLength <= 10 && xCoor < 10) {
        // Changed < 11 to <= 10 for clarity
        for (let i = 0; i < shipLength; i++) {
          if (this.board[yCoor + i][xCoor] !== 'e') {
            return false;
          }
        }
        return true;
      }
      return false;
    }
    if (xCoor + shipLength <= 10 && yCoor < 10) {
      // Changed < 11 to <= 10 for clarity
      for (let i = 0; i < shipLength; i++) {
        if (this.board[yCoor][xCoor + i] !== 'e') {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  attack(xCoor, yCoor) {
    if (this.board[xCoor][yCoor] == 'e') {
      return false;
    }
    return true;
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

module.exports = Gameboard;
