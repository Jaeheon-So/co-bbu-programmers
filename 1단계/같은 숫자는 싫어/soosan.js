function solution(arr) {
  var answer = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    answer.push(arr[i]);
    if (answer[sum - 1] === answer[sum]) {
      answer.pop();
      sum -= 1;
    }
    sum++;
  }
  return answer;
}
