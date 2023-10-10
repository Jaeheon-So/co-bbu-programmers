function solution(A, B) {
  let answer = -1;
  if (A === B) return 0

  for (let i = 1; i < A.length; i += 1) {
    A = A[A.length - 1] + A.slice(0, A.length - 1)

    if (A === B) {
      answer = i
      break
    }
  }

  return answer;
}