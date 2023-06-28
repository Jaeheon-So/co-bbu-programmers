function solution(t, p) {
  let answer = 0;
  for (let i = 0; i < t.length; i += 1) {
    if (t.slice(i, p.length + i) <= p && t.slice(i, p.length + i).length === p.length) {
      answer += 1
    }
  }
  return answer;
}