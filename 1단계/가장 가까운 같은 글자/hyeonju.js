function solution(s) {
  let answer = [-1]
  let maxIndex = -1

  for (let i = 1; i < s.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (s[i] === s[j]) maxIndex = j
    }
    maxIndex !== -1 ? answer.push(i - maxIndex) : answer.push(-1)
    maxIndex = -1
  }
  return answer
}