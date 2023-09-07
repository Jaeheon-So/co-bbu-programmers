function solution(s) {
  var answer = 0;
  let sameCount = 0, diffCount = 0, sameStr
  for(const x of s){        
      if(!sameStr) sameStr = x
      
      if(sameStr === x) sameCount += 1
      else diffCount += 1
      
      if(sameCount === diffCount){
          sameCount = 0
          diffCount = 0
          sameStr = undefined
          answer += 1
      }
  }

  // 남은 부분이 존재하면
  if(sameStr) answer += 1
  
  return answer
}