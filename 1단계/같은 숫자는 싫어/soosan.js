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

// forEach 활용 풀이 미리 확인해서 pop없이 push만

const solution = (arr) => {
  var answer = [];

  arr.forEach(v => {
    if (!answer.length || answer[answer.length - 1] !== v) answer.push(v)
  })

  return answer;
}