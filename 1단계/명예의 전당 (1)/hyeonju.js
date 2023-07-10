function solution(k, score) {
  let answer = [];
  let arr = [];
  score.map((item, idx) => {
    arr.push(item)
    arr.sort((a, b) => a - b)
    if (arr.length === k + 1) {
      arr.shift()
    }
    answer.push(arr[0])
  })
  return answer;
}