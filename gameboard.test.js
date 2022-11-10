import gameboard from './gameboard';

test('Gameboard gets set up correctly', () => {
  expect(gameboard.checkPosition(0,0)).toBe(true);
});