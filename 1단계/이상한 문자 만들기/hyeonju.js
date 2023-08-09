function solution(s) {
  const str = [...s]
  let answer = ""
  let count = 0
  str.map((item) => {
    count = item === " " ? 0 : count + 1
    answer += count % 2 ? item.toUpperCase() : item.toLowerCase()
  })
  return answer;
}