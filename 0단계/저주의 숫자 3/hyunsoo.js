function solution(n) {
  var answer = 0;
  let num = 0
  for(let i = 1; i <= n; i+=1){
      num += 1
      while(num % 3 === 0 || String(num).includes('3')){            
          num += 1
      }
  }
  return answer = num;
}