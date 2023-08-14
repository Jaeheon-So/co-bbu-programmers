function solution(s) {
  let answer = "";
  const str = s.split(" ");
  for (let x of str) {
    for (let i = 0; i < x.length; i += 1) {
      if (i === 0) {
        answer += x[i].toUpperCase();
      } else {
        answer += x[i].toLowerCase();
      }
    }
    answer += " ";
  }
  return answer.slice(0, answer.length - 1);
}
