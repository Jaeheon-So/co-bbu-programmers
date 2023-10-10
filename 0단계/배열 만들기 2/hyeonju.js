function solution(l, r) {
  let answer = []
  let min = (l > 5 && l % 5) ? l + (5 - l % 5) : l
  const condition = /^[05]+$/

  for (let i = min; i <= r; i += 5) {
    if (condition.test(i)) {
      console.log(i)
      answer.push(i)
    }
  }
  return answer.length ? answer : [-1]
}