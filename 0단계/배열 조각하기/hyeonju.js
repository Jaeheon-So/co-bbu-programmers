function solution(arr, query) {
  let answer = arr
  query.map((item, index) => {
    answer = index % 2
      ? answer.slice(item)
      : answer.slice(0, item + 1)
  })
  return answer;
}