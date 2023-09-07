function solution(arr) {
  var stk = [];
  for(let i = 0; i < arr.length; i+=1){
      if(stk.length === 0) {
          stk.push(arr[i])
          }
      else if(stk[stk.length-1] < arr[i]) {
          stk.push(arr[i])
          }
      else if(stk[stk.length-1] >= arr[i]){
          stk.pop()
          i-=1
      }
  }
  return stk;
}