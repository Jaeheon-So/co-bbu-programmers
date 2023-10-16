function solution(s) {
  var answer = [];
  
  const getLen = (s) => {
      let oneCnt = '', zeroCnt = 0
      for(let i = 0; i < s.length; i+=1){        
          if(s[i] === '1') oneCnt += 1
          else zeroCnt +=1
      }
      return [oneCnt, zeroCnt]
  }
  
  let count = 0, zeroCnt = 0    
  while(s.length > 1){
      const [ one, zero ] = getLen(s)        
      let binary = one.length.toString(2)        
      count += 1
      zeroCnt += s.length - one.length        
      s = binary
  }
  return [count, zeroCnt];
}