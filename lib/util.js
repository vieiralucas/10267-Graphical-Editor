const rowToString = arr => arr.reduce((str, a) => str + ' ' + a, '').trim();

const tableToString = table => table.reduce((str, row) => str + rowToString(row) + '\n', '').trim();

module.exports = {
  tableToString
};
