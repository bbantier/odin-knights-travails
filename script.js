const knightMoves = (start, end) => {
  const queue = [[start]];
  const visited = new Set(start.toString());

  while (queue.length) {
    const current = queue.shift();
    const lastPos = current[current.length - 1];
    const [x, y] = lastPos;
    const moves = getMoves(lastPos);

    if (x === end[0] && y === end[1]) {
      const numberOfMoves = current.length - 1;

      console.log(
        `=> You made it in ${numberOfMoves} moves! Here's your path:`
      );
      current.forEach((pos) => console.log(pos));
    }

    for (const move of moves) {
      const string = move.toString();

      if (!visited.has(string)) {
        visited.add(string);
        queue.push([...current, move]);
      }
    }
  }
};

const getMoves = (position) => {
  const [x, y] = position;
  const possibleMoves = [
    [x + 1, y + 2],
    [x + 2, y + 1],
    [x - 1, y - 2],
    [x - 2, y - 1],
    [x + 1, y - 2],
    [x + 2, y - 1],
    [x - 1, y + 2],
    [x - 2, y + 1],
  ];

  const validMoves = possibleMoves.filter(
    (move) =>
      !move.some((coordinate) => {
        return coordinate < 0 || coordinate > 7;
      })
  );

  return validMoves;
};

const start = [3, 3];
const destination = [7, 7];

knightMoves(start, destination);
