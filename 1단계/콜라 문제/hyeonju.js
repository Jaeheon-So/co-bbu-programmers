function solution(a, b, n) {
  let answer = 0;
  let get = 0;
  while (n >= a) {
    get = parseInt(n / a) * b
    answer += get
    n = get + (n % a)
  }
  return answer
}