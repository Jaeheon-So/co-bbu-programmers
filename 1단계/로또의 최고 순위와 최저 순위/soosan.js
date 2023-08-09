function solution(lottos, win_nums) {
  var answer = [];
  const lank = [6, 5, 4, 3, 2, 1]

  let temp = 0
  let unknown = 0
  for (const num of win_nums) {
    if (lottos.indexOf(num) !== -1) temp++
  }

  for (const num of lottos) {
    if (num === 0) {
      temp++
      unknown++
    }
  }

  if (temp === 0) return [6, 6] // 그냥 꽝
  if (temp === 6 && unknown === 0) return [1, 1] // 다 맞았고 가린 것도 없는 경우
  else if (unknown === 6) return [1, 6] // 다 가려져 있는 경우
  else answer.push(lank[temp - 1], lank[temp - (unknown + 1)]) // 보통 경우

  return answer;
}