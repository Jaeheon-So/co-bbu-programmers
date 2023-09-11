function solution(brown, yellow) {
  var answer = [];
  let carpetSize = brown + yellow
  
  for(let i = 3; i < carpetSize; i+=1){
      let w = carpetSize / i
      let h = i
      
      if(w < h) continue
      
      if((w - 2) * (h - 2) === yellow) {
          return answer = [w, h]
      }
  }
  return answer;
}