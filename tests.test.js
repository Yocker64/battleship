// Use a direct import to get the class
import Gameboard from './src/scripts/Gameboard.js';

test('Can place a ship on a valid, empty spot', () => {
  const board = new Gameboard();

  expect(board.canPlace(3, 1, 1)).toBe(true);
});

test('Should NOT be able to place a ship off the board', () => {
  const board = new Gameboard();

  // This ship would go past the bottom edge (y=8, 9, 10) - which is out of bounds
  expect(board.canPlace(3, 1, 8)).toBe(false);
});
