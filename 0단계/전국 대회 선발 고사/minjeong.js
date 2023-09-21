function solution(rank, attendance) {
  let realRank = [];
  for (let i = 0; i < attendance.length; i += 1) {
    if (attendance[i]) {
      realRank.push(rank[i]);
    }
  }
  realRank.sort((a, b) => a - b);
  return (
    10000 * rank.indexOf(realRank[0]) +
    100 * rank.indexOf(realRank[1]) +
    rank.indexOf(realRank[2])
  );
}
