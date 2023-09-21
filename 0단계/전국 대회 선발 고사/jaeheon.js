function solution(rank, attendance) {
  rank = rank
    .map((r, idx) => [r, idx])
    .filter((r, idx) => attendance[idx])
    .sort((a, b) => a[0] - b[0]);

  return 10000 * rank[0][1] + 100 * rank[1][1] + rank[2][1];
}
