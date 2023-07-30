function solution(s, skip, index) {
  var answer = "";

  let str = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let x of skip) {
    if (str[str.indexOf(x)] !== -1) {
      str.splice(str.indexOf(x), 1);
    }
  }

  for (let x of s) {
    let idx = str.indexOf(x) + index;

    if (idx < str.length) answer += str[idx];
    else {
      if (idx - str.length < str.length) answer += str[idx - str.length];
      else answer += str[idx - str.length * 2];
    }
  }

  return answer;
}
