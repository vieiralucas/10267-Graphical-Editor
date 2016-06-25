const expect = require('chai').expect;
const commands = require('../lib/commands');

describe('commands', function() {
  describe('createTable', function() {
    it('returns an array of arrays MxN populated with 0', function() {
      const table = commands.createTable(2, 2)
      expect(table).to.eql([[0 , 0], [0, 0]]);
    });
  });

  describe('clearTable', function() {
    it('returns a table cleared (all values setted to 0)', function() {
      const dirtyTable = [[1, 2], [3, 4]];
      const clearedTable = commands.clearTable(dirtyTable);
      expect(clearedTable).to.eql([[0, 0], [0, 0]]);
    });
  });

  describe('colorPixel', function() {
    it('sets the pixel of a given coordinate to the given color', function() {
      const table = [[0, 0], [0, 0]];
      const coloredTable = commands.colorPixel(table, 0, 1, 5);
      expect(coloredTable).to.eql([[0, 0], [5, 0]]);
    });
  })

  describe('verticalDraw', function() {
    it('should draw a vertical line', function() {
      const table = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      const verticalDrawed = commands.verticalDraw(table, 1, 1, 3, 9);
      const expected = [
        [0, 0, 0, 0],
        [0, 9, 0, 0],
        [0, 9, 0, 0],
        [0, 9, 0, 0]
      ];
      expect(verticalDrawed).to.eql(expected);
    });

    it('should work if y1 is bigger than y2', function() {
      const table = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      const verticalDrawed = commands.verticalDraw(table, 1, 3, 1, 9);
      const expected = [
        [0, 0, 0, 0],
        [0, 9, 0, 0],
        [0, 9, 0, 0],
        [0, 9, 0, 0]
      ];
      expect(verticalDrawed).to.eql(expected);
    });
  });

  describe('horizontalDraw', function() {
    it('should draw a horizontal line', function() {
      const table = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      const horizontalDrawed = commands.horizontalDraw(table, 1, 1, 3, 9);
      const expected = [
        [0, 0, 0, 0],
        [0, 9, 9, 9],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      expect(horizontalDrawed).to.eql(expected);
    });

    it('should work if x1 is bigger than x2', function() {
      const table = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      const horizontalDrawed = commands.horizontalDraw(table, 1, 3, 1, 9);
      const expected = [
        [0, 0, 0, 0],
        [0, 9, 9, 9],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      expect(horizontalDrawed).to.eql(expected);
    });
  });

  describe('fillRect', function() {
    it('should fill a rectangle', function() {
      const table = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ];
      const withRect = commands.fillRect(table, 1, 1, 3, 3, 9);
      const expected = [
        [0, 0, 0, 0, 0],
        [0, 9, 9, 9, 0],
        [0, 9, 9, 9, 0],
        [0, 9, 9, 9, 0],
        [0, 0, 0, 0, 0]
      ];
      expect(withRect).to.eql(expected);
    });

    it('should work if point1 is bigger than point2', function() {
      const table = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ];
      const withRect = commands.fillRect(table, 3, 3, 1, 1, 9);
      const expected = [
        [0, 0, 0, 0, 0],
        [0, 9, 9, 9, 0],
        [0, 9, 9, 9, 0],
        [0, 9, 9, 9, 0],
        [0, 0, 0, 0, 0]
      ];
      expect(withRect).to.eql(expected);
    });
  });

  describe('fillRegion', function() {
    it('should fill the region with the colour c', function() {
      const table = [
        [0, 0, 0, 0, 0],
        [0, 9, 9, 0, 0],
        [0, 9, 0, 9, 0],
        [9, 0, 0, 9, 0],
        [0, 9, 9, 0, 0]
      ];
      const region = commands.fillRegion(table, 2, 2, 8);
      const expected = [
        [0, 0, 0, 0, 0],
        [0, 9, 9, 0, 0],
        [0, 9, 8, 9, 0],
        [9, 8, 8, 9, 0],
        [0, 9, 9, 0, 0]
      ];
      expect(region).to.eql(expected);
    });
  });
});
