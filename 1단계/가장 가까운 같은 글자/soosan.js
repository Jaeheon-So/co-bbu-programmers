function solution(s) {
  var answer = [];

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (s[i] === s[j]) {
        answer.unshift(i - j);
        break;
      } else if (j === 0) {
        answer.unshift(-1);
      }
    }
  }
  answer.unshift(-1);

  return answer;
}
