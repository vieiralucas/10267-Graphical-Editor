const createTable = (m, n) => {
  let table = [];

  for (let y = 0; y < m; y++) {
    let row = [];
    for (let x = 0; x < n; x++) {
      row.push(0);
    }

    table.push(row);
  }

  return table;
};

const clearTable = table => table.map(r => r.map(c => 0));

const colorPixel = (table, x, y, c) => {
  table[y][x] = c;
  return table;
};

const verticalDraw = (table, x, y1, y2, c) => {
  const startY = Math.min(y1, y2);
  const endY = Math.max(y1, y2);
  for (let y = startY; y <= endY; y++) {
    table[y][x] = c;
  }

  return table;
};

const horizontalDraw = (table, y, x1, x2, c) => {
  const startX = Math.min(x1, x2);
  const endX = Math.max(x1, x2);
  for (let x = startX; x <= endX; x++) {
    table[y][x] = c;
  }

  return table;
};

const fillRect = (table, x1, y1, x2, y2, c) => {
  const smallX = Math.min(x1, x2);
  const bigX = Math.max(x1, x2);
  const width = bigX - smallX;
  const smallY = Math.min(y1, y2);
  const bigY = Math.max(y1, y2);
  const height = bigY - smallY;

  for (let y = smallY; y <= smallY + height; y++) {
    for (let x = smallX; x <= smallX + width; x++) {
      table[y][x] = c;
    }
  }

  return table;
};

const fillRegion = (table, x, y, c) => {
  const fillingColor = table[y][x];
  const iter = (table, x, y) => {
    if (table[y] === undefined || table[y][x] === undefined || table[y][x] !== fillingColor) {
      return table;
    }

    if (table[y][x] === fillingColor) {
      table[y][x] = c;
    }

    // spread all directions
    table = iter(table, x + 1, y);
    table = iter(table, x - 1, y);
    table = iter(table, x, y + 1);
    table = iter(table, x, y - 1);

    return table;
  };

  return iter(table, x, y);
};

module.exports = {
  createTable,
  clearTable,
  colorPixel,
  verticalDraw,
  horizontalDraw,
  fillRect,
  fillRegion
}
