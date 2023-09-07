function solution(s) {
  let answer = 0;

  let a = 0;
  let b = 0;
  let c = s[0]

  for (let i = 0; i < s.length; i++) {
    if (c === s[i]) a++
    else b++

    if (a === b) {
      a = 0
      b = 0
      c = s[i + 1]
      answer++
    }

    if (i === s.length - 1 && c) answer++
  }

  return answer
}
