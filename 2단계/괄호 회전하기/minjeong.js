function solution(s) {
  var answer = 0;
  let stack = [];
  const sArr = s.split("");

  // stack을 관리해 주는 함수
  function stackSolution(str) {
    for (let x of str) {
      if (stack.length > 0) {
        if (x === "]" && stack[stack.length - 1] === "[") stack.pop();
        else if (x === "}" && stack[stack.length - 1] === "{") stack.pop();
        else if (x === ")" && stack[stack.length - 1] === "(") stack.pop();
        else stack.push(x);
      } else {
        stack.push(x);
      }
    }

    // 위 for문은 바로 만나는 괄호들만 삭제해 주기 때문에 남아 있는 괄호 전부 삭제해 주기 위한 for문
    for (let i = 0; i < stack.length; i += 1) {
      if (stack[i] === "[" && stack[i + 1] === "]") {
        stack.shift();
        stack.shift();
        i = 0;
      } else if (stack[i] === "{" && stack[i + 1] === "}") {
        stack.shift();
        stack.shift();
        i = 0;
      } else if (stack[i] === "(" && stack[i + 1] === ")") {
        stack.shift();
        stack.shift();
        i = 0;
      }
    }

    if (!stack.length) answer += 1;
  }

  // 제일 처음 stack 실행
  stackSolution(s);

  // 왼쪽으로 한 칸씩 미루면서 stack 관리 실행
  for (let i = 0; i < s.length - 1; i += 1) {
    stack = [];
    sArr.push(sArr.shift());
    stackSolution(sArr);
  }

  return answer;
}
