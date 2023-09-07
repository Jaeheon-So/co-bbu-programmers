function solution(n) {
  let oneCnt = n.toString(2).replaceAll("0", "").length;

  for (let i = 1; ; i++) {
    if (oneCnt === (n + i).toString(2).replaceAll("0", "").length) return n + i;
  }
}
