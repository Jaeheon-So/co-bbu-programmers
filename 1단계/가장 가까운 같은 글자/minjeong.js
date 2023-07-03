function solution(s) {
  let answer = [];
  let newS = "";
  for (let i = 0; i < s.length; i += 1) {
    if (newS.includes(s[i])) {
      let def = 0;
      for (let j = 0; j < newS.length; j += 1) {
        if (newS[j] === s[i]) {
          def = Math.abs(j - i);
        }
      }
      answer.push(def);
    } else {
      answer.push(-1);
    }
    newS += s[i];
  }
  return answer;
}

// 이전 풀이
function solution(s) {
  let answer = [];
  answer = Array(s.length).fill(-1);
  for (let i = 0; i < s.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (s[i] === s[j]) {
        answer[i] = i - j;
      }
    }
  }
  return answer;
}
