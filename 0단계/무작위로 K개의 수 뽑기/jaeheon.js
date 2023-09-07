function solution(arr, k) {
  let answer = [];

  for (let n of arr) {
    if (answer.length >= k) break;
    if (answer.length === 0 || !answer.includes(n)) answer.push(n);
  }

  return answer.length === k
    ? answer
    : answer.concat(new Array(k - answer.length).fill(-1));
}
