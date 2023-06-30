function solution(strings, n) {
  let answer = [];
  answer = strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a > b ? 1 : -1
    } else {
      return a[n].charCodeAt() - b[n].charCodeAt()
    }
  })
  return answer;
}