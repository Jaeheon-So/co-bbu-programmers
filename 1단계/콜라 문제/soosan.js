function solution(a, b, n) {
  let answer = 0
  let nowGetCola = 0

  while (n >= a) {
    nowGetCola = Math.floor(n / a) * b
    answer += nowGetCola
    n = nowGetCola + n % a
  }

  return answer;
}