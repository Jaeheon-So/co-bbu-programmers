function solution(s) {
  let answer = true;
  let stack = []

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === ')' && stack[stack.length - 1] === '(') {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }

  return stack.length === 0;
}