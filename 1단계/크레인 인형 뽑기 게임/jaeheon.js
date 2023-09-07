function solution(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        stack.push(board[i][move - 1]);
        board[i][move - 1] = 0;
        break;
      }
    }
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] === stack[stack.length - 2]
    ) {
      stack.pop();
      stack.pop();
      answer += 2;
    }
  });

  return answer;
}
