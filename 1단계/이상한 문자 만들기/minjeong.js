function solution(s) {
  var answer = "";
  let cnt = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === " ") {
      answer += s[i];
      cnt = 0;
    } else if (cnt % 2 === 0) {
      cnt += 1;
      answer += s[i].toUpperCase();
    } else if (cnt % 2 !== 0) {
      cnt += 1;
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}
