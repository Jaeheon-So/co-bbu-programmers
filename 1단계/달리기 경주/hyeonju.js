// 시간초과
function solution(players, callings) {
  callings.map((name) => {
    const index = players.findIndex(item => item === name)
    players.splice(index - 1, 0, name)
    players.splice(index + 1, 1)
  })
  return players;
}

// 정답코드 참고
function solution(players, callings) {
  const playerList = {}
  const rankList = {}
  players.map((player, idx) => {
    const rank = idx + 1
    playerList[player] = rank
    rankList[rank] = player
  })

  callings.map((name) => {
    const losePlayer = rankList[playerList[name] - 1]
    rankList[playerList[name]] = losePlayer
    rankList[playerList[losePlayer]] = name
    playerList[name] -= 1
    playerList[losePlayer] += 1
  })
  return Object.values(rankList)
}
// 배열을 객체로 변환할 때 객체 키를 숫자로 주게 되면 기존 배열의 순서와 다르게 오름차순 정렬돼서 출력된다.
// key 값이 알파벳이라면 작성한 순서대로 출력이 되었지만 숫자일 때는 오름차순 순서로 반환돼서 출력된다.