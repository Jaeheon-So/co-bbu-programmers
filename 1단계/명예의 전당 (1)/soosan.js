function solution(k, score) {
  let answer = []

  let sum = []
  for (let x of score) {
    if (Math.min(...sum) <= x || sum.length === 0 || sum.length < k) {
      sum.push(x)
    }
    sum.sort((a, b) => a - b)

    if (sum.length > k || sum.length > score.length) sum.shift()
    answer.push(sum[0])
  }

  return answer
}