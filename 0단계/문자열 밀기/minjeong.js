function solution(A, B) {
  let answer = -1;
  let cnt = 0;
  if (A === B) return (answer = 0);
  for (let i = 0; i < A.length; i += 1) {
    A = A.split("");
    A.unshift(A.pop());
    A = A.join("");
    cnt += 1;
    if (A === B) {
      answer = cnt;
    }
  }
  return answer;
}
