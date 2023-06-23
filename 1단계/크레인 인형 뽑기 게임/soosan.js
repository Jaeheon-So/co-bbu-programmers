const solution = (board, moves) => {
  let tempArr = [];
  let answer = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] > 0) {
        let temp = board[j][moves[i] - 1];
        board[j][moves[i] - 1] = 0;

        tempArr.push(temp);
        for (let k = 0; k < tempArr.length; k++) {
          if (tempArr[k] === tempArr[k - 1]) {
            answer += 2;
            tempArr.pop();
            tempArr.pop();
          }
        }
        break;
      }
    }
  }

  return answer;
};
