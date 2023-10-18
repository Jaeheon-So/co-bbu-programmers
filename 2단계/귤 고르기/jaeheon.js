function solution(k, tangerine) {
  let answer = 0;
  let map = {};

  tangerine.forEach((t) => (map[t] = (map[t] || 0) + 1));

  for (let n of Object.values(map).sort((a, b) => b - a)) {
    answer++;
    if (k - n <= 0) break;
    k -= n;
  }

  return answer;
}
