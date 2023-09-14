function solution(arr, k) {
  var answer = [];
  for (let x of arr) {
    if (!answer.includes(x)) {
      answer.push(x);
    }
  }

  if (answer.length > k) {
    return answer.slice(0, k);
  } else if (answer.length < k) {
    for (let i = answer.length; i < k; i += 1) {
      answer.push(-1);
    }
    return answer;
  } else {
    return answer;
  }
}
