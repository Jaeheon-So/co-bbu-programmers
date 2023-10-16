function solution(s) {
  var answer = [];
  let zeroCnt = 0;
  let transCnt = 0;
  while (s !== "1") {
    let c = "";
    for (x of s) {
      if (x === "1") c += "1";
      else zeroCnt += 1;
    }
    s = c.length.toString(2);
    transCnt += 1;
  }
  answer = [transCnt, zeroCnt];
  return answer;
}
