function solution(A, B) {
  var answer = -1;
  let i = 0
  while(i < A.length){
      if(A === B) return answer = i
      A = A.slice(-1) + A.slice(0, -1)
      i+=1
  }
  return answer
}