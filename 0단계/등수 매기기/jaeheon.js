function solution(score) {
  let rank = 0;

  score = score
    .map((s, idx) => [(s[0] + s[1]) / 2, idx])
    .sort((a, b) => b[0] - a[0]);
  score = score.map((s, idx, origin) => {
    if (idx !== 0 && origin[idx - 1][0] === s[0]) return [...s, rank];
    else {
      rank = idx + 1;
      return [...s, idx + 1];
    }
  });

  return score.sort((a, b) => a[1] - b[1]).map((s) => s[2]);
}
