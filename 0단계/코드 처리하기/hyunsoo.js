function solution(code) {
  let mode = 0
  let ret = ''
  for(let idx = 0; idx < code.length; idx+=1){
      if(code[idx] === '1'){
          mode = mode === 0 ? 1 : 0
          continue
      }
      if(mode === 0 && idx%2 === 0){
          ret += code[idx]
      }
      if(mode === 1 && idx%2 === 1){
          ret += code[idx]
      }
  }  
  return ret === '' ? 'EMPTY' : ret;
}