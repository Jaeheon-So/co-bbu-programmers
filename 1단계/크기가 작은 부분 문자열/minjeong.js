function solution(t, p) {
  let answer = 0;
  for (let i = 0; i < t.length; i += 1) {
    let newNum = "";
    for (let j = 0; j < p.length; j += 1) {
      newNum += t[i + j];
    }
    if (+newNum <= +p) answer += 1;
  }
  return answer;
}
