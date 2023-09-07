function solution(n) {
  let answer = 0;
  let sum = 0;
  let l = 1;

  for (let r = 1; r <= n; r++) {
    sum += r;
    while (sum > n) sum -= l++;
    if (sum === n) {
      answer++;
      sum -= l++;
    }
  }

  return answer;
}
