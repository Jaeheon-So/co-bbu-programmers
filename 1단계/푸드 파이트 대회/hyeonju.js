function solution(food) {
  let answer = '';
  for (let i = 1; i < food.length; i += 1) {
    if (food[i] % 2) {
      answer += String(i).repeat((food[i] - 1) / 2)
    } else {
      answer += String(i).repeat(food[i] / 2)
    }
  }
  return answer + 0 + [...answer].reverse().join('')

}
