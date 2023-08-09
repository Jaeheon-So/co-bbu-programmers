function solution(s) {
  let answer = 0;
  let firS = "";
  let sameCnt = 0;
  let diffCnt = 0;
  for (let x of s) {
    if (!firS) firS = x;
    if (firS === x) sameCnt += 1;
    else diffCnt += 1;

    if (sameCnt === diffCnt) {
      answer += 1;
      sameCnt = 0;
      diffCnt = 0;
      firS = "";
    }
  }
  if (firS) answer += 1;
  return answer;
}
