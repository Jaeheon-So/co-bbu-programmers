function solution(balls, share) {
  let n = 1
  let m = 1
  let o = 1
  for (let i = 1; i <= balls; i += 1) {
    n *= i
    if (i <= share) {
      m *= i
    }
    if (i <= balls - share) {
      o *= i
    }
  }
  return Math.round(n / (o * m))
}