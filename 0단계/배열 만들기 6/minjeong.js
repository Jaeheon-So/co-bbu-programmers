function solution(arr) {
  var answer = [];
  let i = 0;
  while (i < arr.length) {
    if (!answer.length) {
      answer.push(arr[i]);
      i += 1;
    } else {
      if (answer[answer.length - 1] === arr[i]) {
        answer.pop();
        i += 1;
      } else if (answer[answer.length - 1] !== arr[i]) {
        answer.push(arr[i]);
        i += 1;
      }
    }
  }
  return answer.length ? answer : [-1];
}
