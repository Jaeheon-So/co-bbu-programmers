// 새로 푼 것
function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// 예전에 푼 것
function solution(arr) {
  let stack = [];
  for (let x of arr) {
    if (stack.length > 0 && stack[stack.length - 1] === x) {
      stack.pop();
      stack.push(x);
    } else stack.push(x);
  }
  return stack;
}
