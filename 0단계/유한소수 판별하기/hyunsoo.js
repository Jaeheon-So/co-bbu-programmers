function solution(a, b) {
  var answer = 2;
  let flag = false
  for(let i = a; i >= 2; i-=1){
      if(a%i === 0 && b%i === 0){
          a /= i
          b /= i
      }
      if(flag) return
  }
  let bb = b
  while(bb%2 === 0){
      bb /= 2
  }
  while(bb%5 === 0){
      bb /= 5
  }
  return answer = bb === 1 ? 1 : 2;
}