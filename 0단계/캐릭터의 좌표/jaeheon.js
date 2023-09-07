function solution(keyinput, board) {
  return keyinput.reduce((res, key) => start(res, key, board), [0, 0]);
}

function start(res, key, board) {
  let map = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };
  let newRes = res.map((x, y) => x + map[key][y]);

  if (Math.abs(newRes[0]) * 2 > board[0] || Math.abs(newRes[1]) * 2 > board[1])
    return res;
  return newRes;
}
