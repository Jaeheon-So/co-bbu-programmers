function solution(keyinput, board) {
  let answer = [0, 0];
  for (let x of keyinput) {
    if (x === "left" && answer[0] !== -Math.floor(board[0] / 2)) {
      answer[0] -= 1;
    } else if (x === "right" && answer[0] !== Math.floor(board[0] / 2)) {
      answer[0] += 1;
    } else if (x === "up" && answer[1] !== Math.floor(board[1] / 2)) {
      answer[1] += 1;
    } else if (x === "down" && answer[1] !== -Math.floor(board[1] / 2)) {
      answer[1] -= 1;
    }
  }
  return answer;
}
