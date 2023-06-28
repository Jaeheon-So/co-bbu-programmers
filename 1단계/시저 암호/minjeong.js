// 새로 푼 정답
function solution(s, n) {
  let answer = "";
  for (let x of s) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
      let askiiNum1 = x.charCodeAt() + n;
      if (askiiNum1 > 90) {
        answer += String.fromCharCode(askiiNum1 - 90 + 64);
      } else {
        answer += String.fromCharCode(askiiNum1);
      }
    } else if (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) {
      let askiiNum2 = x.charCodeAt() + n;
      if (askiiNum2 > 122) {
        answer += String.fromCharCode(askiiNum2 - 122 + 96);
      } else {
        answer += String.fromCharCode(askiiNum2);
      }
    } else {
      answer += x;
    }
  }
  return answer;
}

// 기존 정답
function solution(s, n) {
  return s
    .split("")
    .map((el) => {
      if (el == " ") return el;
      let tmp = el.charCodeAt();
      return el.toLowerCase().charCodeAt() + n > 122
        ? String.fromCharCode(tmp + n - 26)
        : String.fromCharCode(tmp + n);
    })
    .join("");
}
