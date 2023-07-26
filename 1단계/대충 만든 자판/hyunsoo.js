function solution(keymap, targets) {
  var answer = [];
  let nums = {}
  for(let i = 0; i < keymap.length; i+=1){
      for(let j = 0; j < keymap[i].length; j+=1){
          let str = keymap[i][j]
          if(nums[str] === undefined) {
              nums[str] = j+1
          } else {
              nums[str] = Math.min(nums[str], j+1)
          }
      }
  }
  
  for(let i = 0; i < targets.length; i+=1){
      let result = 0
      let isFind = true
      for(let j = 0; j < targets[i].length; j+=1){
          let str = targets[i][j]            
          if(nums[str] === undefined) {
              isFind = false
          } else {
              result += nums[str]
          }
      }
      answer.push(isFind ? result : -1)
  }
  return answer;
}