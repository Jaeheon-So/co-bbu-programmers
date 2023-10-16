function solution(code) {
  var answer = "";
  let mode = false;
  for (let i = 0; i < code.length; i += 1) {
    if (code[i] === "1") mode = !mode;
    else if (!mode && i % 2 === 0) answer += code[i];
    else if (mode && i % 2 !== 0) answer += code[i];
  }
  return answer.length ? answer : "EMPTY";
}
