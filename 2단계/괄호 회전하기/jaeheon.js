function solution(s) {
  return s.split("").filter((_, idx) => check(s.slice(idx) + s.slice(0, idx)))
    .length;
}

function check(str) {
  let stack = [];
  let obj = { "(": ")", "{": "}", "[": "]" };

  for (let v of str) {
    if (obj[v]) stack.push(v);
    else {
      if (!stack.length || obj[stack.at(-1)] !== v) return false;
      stack.pop();
    }
  }
  if (stack.length) return false;

  return true;
}
