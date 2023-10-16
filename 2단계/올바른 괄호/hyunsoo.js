function solution(s){
  var answer = true;
  let open = 0, close = 0
  for(let i = 0; i<s.length; i+=1){
      if(s[0] === ')') return answer = false
      if(s[i] === '(') open += 1
      if(s[i] === ')') close += 1
      if(open < close) return answer = false
  }
  return answer = open !== close ? false : true;
}