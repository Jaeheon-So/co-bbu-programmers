function solution(n, m, section) {
  let answer = 0;
  let painted = 0;
  section.map(item => {
    if (item > painted) {
      painted = item + m - 1
      answer += 1
    }
  })
  return answer;
}