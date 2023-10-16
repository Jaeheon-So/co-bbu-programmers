function solution(keyinput, board) {
  var answer = [0, 0];
  let [maxLeft, maxRight, maxUp, maxDown] = [-Math.floor(board[0]/2), Math.floor(board[0]/2), Math.floor(board[1]/2), -Math.floor(board[1]/2)]
  
  for(let direction of keyinput){
      switch (direction) {
          case 'left':
              answer[0] = answer[0] !== maxLeft ? answer[0]-1 : answer[0]
              break
          case 'right':
              answer[0] = answer[0] !== maxRight ? answer[0]+1 : answer[0]
              break
          case 'up':
              answer[1] = answer[1] !== maxUp ? answer[1]+1 : answer[1]
              break
          case 'down':
              answer[1] = answer[1] !== maxDown ? answer[1]-1 : answer[1]
              break
      }
  }
  return answer;
}