function solution(s) {
  if (s.length === 1 || s[0] === ")") return false;
  let cnt = 0;
  for (let x of s) {
    x === "(" ? (cnt += 1) : (cnt -= 1);
    if (cnt < 0) break;
  }
  return cnt === 0 ? true : false;
}

// 기존 제출 코드는 효율성 테스트에서 타임 초과됨
function solution(s) {
  let stack = [];
  for (let x of s) {
    if (!stack.length) {
      stack.push(x);
    } else {
      if (x === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(x);
      }
    }
  }
  return stack.length ? false : true;
}
