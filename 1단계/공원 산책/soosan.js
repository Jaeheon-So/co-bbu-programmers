const solution = (park, routes) => {
  let answer = [];

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  let nx, ny;
  let x = 0,
    y = 0;
  let d;

  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === "S") {
        [x, y] = [i, j];
      }
    }
  }
  let cntX = x,
    cntY = y;

  for (let i = 0; i < routes.length; i++) {
    let count = 0;

    switch (routes[i][0]) {
      case "N":
        d = 0;
        break;
      case "S":
        d = 2;
        break;
      case "W":
        d = 3;
        break;
      case "E":
        d = 1;
        break;
      default:
        return;
    }

    while (count < routes[i][2]) {
      count++;

      [nx, ny] = [x + dx[d], y + dy[d]];

      if (nx < 0 || ny < 0 || nx >= park[0].length || ny >= park[0].length || park[nx][ny] === "X") {
        [x, y] = [cntX, cntY];
        break;
      }

      [x, y] = [nx, ny];
    }
    [cntX, cntY] = [x, y];
  }

  answer.push(cntX);
  answer.push(cntY);

  return answer;
};
