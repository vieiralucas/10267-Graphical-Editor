const expect = require('chai').expect;
const util = require('../lib/util');

describe('util', function() {
  describe('tableToString', function() {
    it('should convert table to a beautiful and printable string =]', function() {
      const table = [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [2, 2, 2, 2],
        [3, 3, 3, 3]
      ];
      const string = util.tableToString(table);
      const expected = '0 0 0 0\n' +
        '1 1 1 1\n' +
        '2 2 2 2\n' +
        '3 3 3 3';

      expect(string).to.eql(expected);
    });
  });
});
