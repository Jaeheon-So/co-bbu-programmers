function solution(arr, queries) {
  let answer = [];
  for (let x of queries) {
    const [s, e, k] = x;
    let num = [];
    for (let i = s; i <= e; i += 1) {
      if (arr[i] > k) {
        num.push(arr[i]);
      }
    }
    num.sort((a, b) => a - b);
    answer.push(num.length ? num[0] : -1);
  }
  return answer;
}
