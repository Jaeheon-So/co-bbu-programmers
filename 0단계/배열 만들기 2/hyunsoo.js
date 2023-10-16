function solution(l, r) {
  var answer = [];
  for(let i = l; i <= r; i+=1){
      if(i%5 !== 0) continue
      if( [...String(i)].some( val => 
          val === '1' ||
          val === '2' ||
          val === '3' ||
          val === '4' ||
          val === '6' ||
          val === '7' ||
          val === '8' ||
          val === '9'
      ) ){
          continue
      } else {
          answer.push(i)
      }
  }
  return answer = answer.length === 0 ? [-1] : answer;
}