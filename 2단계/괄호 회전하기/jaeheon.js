function solution(s) {
  let answer = 0;
  let obj = { "(": ")", "{": "}", "[": "]" };

  for (let i = 0; i < s.length; i++) {
    let stack = [];
    let flag = false;
    let temp = s.substring(i) + s.substring(0, i);
    for (let v of temp) {
      if (v === "(" || v === "[" || v === "{") stack.push(v);
      else {
        if (stack.length === 0 || obj[stack[stack.length - 1]] !== v) {
          flag = true;
          break;
        }
        stack.pop();
      }
    }
    if (stack.length > 0 || flag === true) {
      flag = false;
      continue;
    } else {
      answer++;
    }
  }

  return answer;
}
