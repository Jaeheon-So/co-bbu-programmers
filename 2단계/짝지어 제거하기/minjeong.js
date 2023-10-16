function solution(s) {
  let answer = 0;
  let notPairStack = [];
  for (let i = 0; i < s.length; i += 1) {
    notPairStack[notPairStack.length - 1] === s[i]
      ? notPairStack.pop()
      : notPairStack.push(s[i]);
  }
  answer = notPairStack.length === 0 ? 1 : 0;
  return answer;
}
