function solution(polynomial) {
  var answer = [];
  let arr = polynomial.split(' + ')    
  let xNum = 0
  let num = 0
  for(let i = 0; i<arr.length; i+=1){
      if(arr[i].slice(-1) === 'x'){
          if(arr[i] === 'x') {
              xNum += 1
              continue
          }
          xNum += Number(arr[i].replace('x', ''))
      } else {
          num += Number(arr[i])
      }
  }
  if(xNum > 0) answer = [xNum === 1 ? 'x' : xNum+'x']
  if(num > 0) answer.push(num)
  return answer.join(' + ');
}