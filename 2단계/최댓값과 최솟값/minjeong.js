function solution(s) {
  let answer = "";
  const nums = s.split(" ");
  answer = `${Math.min(...nums)} ${Math.max(...nums)}`;
  return answer;
}
