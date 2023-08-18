function solution(sides) {
  let [answer, max, min] = [0, Math.max(...sides), Math.min(...sides)];

  for (let i = 1; i <= max; i++) if (i + min > max) answer++;

  for (let i = max + 1; ; i++) {
    if (max + min > i) answer++;
    else break;
  }

  return answer;
}
