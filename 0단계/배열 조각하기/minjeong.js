function solution(arr, query) {
  let answer = [];
  for (let i = 0; i < query.length; i += 1) {
    if (i === 0) {
      answer = arr.slice(0, query[i] + 1);
    } else if (i % 2 === 0) {
      answer = answer.slice(0, query[i] + 1);
    } else if (i % 2 !== 0) {
      answer = answer.slice(query[i]);
    }
  }
  return answer;
}
