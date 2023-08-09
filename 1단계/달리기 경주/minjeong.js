// 시간 초과

function solution(players, callings) {
  var answer = [...players];
  for (let x of callings) {
    const rank = answer.indexOf(x);
    const player1 = answer[rank - 1];
    answer[rank] = player1;
    answer[rank - 1] = x;
  }
  return answer;
}

// 풀이 참고

function solution(players, callings) {
  const keyPlayers = {};
  const keyRanks = {};
  players.forEach((player, idx) => {
    const rank = idx + 1;
    keyPlayers[player] = rank;
    keyRanks[rank] = player;
  });

  callings.forEach((calling) => {
    const losePlayer = keyRanks[keyPlayers[calling] - 1];

    keyRanks[keyPlayers[calling]] = losePlayer;
    keyRanks[keyPlayers[losePlayer]] = calling;
    keyPlayers[calling] -= 1;
    keyPlayers[losePlayer] += 1;
  });

  return Object.values(keyRanks);
}
