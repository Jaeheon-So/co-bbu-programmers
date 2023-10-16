function solution(l, r) {
  const zeroAndFive = [];
  for (let i = l; i <= r; i++) {
    if (i.toString().replace(/[05]/g, "").length === 0) {
      zeroAndFive.push(i);
    }
  }
  const answer = zeroAndFive.length === 0 ? [-1] : zeroAndFive;
  return answer;
}
