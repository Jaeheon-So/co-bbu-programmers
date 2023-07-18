function solution(number, limit, power) {
  var answer = 0;
  
  const getDivisorL = (num) => {        
      let divisorL = 0
      let idx = 1
      while(idx <= Math.sqrt(num)){
          if(num % idx === 0){
              divisorL += 1
              if(num / idx !== idx) divisorL += 1
          }
          idx+=1
      }
      return divisorL        
  }
  
  for(let i = 1; i <= number; i+=1) {
      let divisorL = getDivisorL(i)
      if(divisorL > limit){
          divisorL = power
      }
      answer += divisorL
  }
  return answer;
}