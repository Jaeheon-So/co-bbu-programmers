function solution(picture, k) {
  var answer = [];    
  for(let strs of picture) {
      let line = ''
      for(let str of strs){
          line += str.repeat(k)
      }
      let i = 0
      while(i < k){
          answer.push(line)
          i+=1
      }        
  }
  return answer;
}