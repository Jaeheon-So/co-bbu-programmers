function solution(d, budget) {
  var answer = 0;
  const sorted = d.sort((a, b) => a - b)
  sorted.map(item => {
    if (budget >= item) {
      answer += 1
      budget -= item
    }
  })
  return answer;
}