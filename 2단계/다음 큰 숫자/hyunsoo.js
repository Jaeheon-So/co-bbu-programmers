function solution(n) {
  var answer = 0;
  const regexp = new RegExp(1, 'g')
  const before = n.toString(2).match(regexp).length    
  const getNum = (n) => {        
      const next = (n+1).toString(2).match(regexp).length        
      if (before === next) {
          return answer = n+1
      } else {
          getNum(n+1)
      }
  }    
  getNum(n)
  return answer
}