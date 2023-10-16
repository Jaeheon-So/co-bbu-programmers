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
  while(b%2 === 0){
      b /= 2
  }
  while(b%5 === 0){
      b /= 5
  }
  return answer = b === 1 ? 1 : 2;
}