function solution(n, m) {
  let min = 0
  let max = []
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0 && m % i === 0) {
      min = i
    }
  }
  for (let i = 1; i <= n * m; i += 1) {
    if (i % n === 0 && i % m === 0) {
      max.push(i)
    }
  }
  return [min, max[0]]
}