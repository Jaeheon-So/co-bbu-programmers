function solution(str) {
  let stack = [];

  for (let s of str) {
    if (s === "(") stack.push(s);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}
