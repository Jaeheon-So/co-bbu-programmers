function solution(n) {
  let cnt = 1;

  while (n > 1) {
    if (n % 2 !== 0) cnt++;
    n = Math.floor(n / 2);
  }

  return cnt;
}
