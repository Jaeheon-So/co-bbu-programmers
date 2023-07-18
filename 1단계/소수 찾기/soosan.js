function solution(n) {
  let answer = []
  let chkArr = []

  for (let i = 2; i <= n; i++) {
    chkArr[i] = true
  }

  for (let i = 2; i <= n; i++) {
    if (chkArr[i]) {
      answer.push(i)
      for (let j = i; j <= n; j += i) {
        chkArr[j] = false
      }
    }
  }
  return answer.length
}