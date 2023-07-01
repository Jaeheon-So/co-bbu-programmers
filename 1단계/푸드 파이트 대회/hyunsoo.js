function solution(food) {
  var answer = '';
  let sum = [];
  for(let i = 1; i < food.length; i+=1){
      if(parseInt(food[i]/2) >= 1){
          for(let j = 1; j <= food[i]/2; j+=1){
              sum.push(parseInt(i));
          }            
      }        
  }
  let reversed = Array.from(sum).reverse();
  answer = ([...sum, 0, ...reversed]).join('');
  return answer;
}
// repeat() 활용하면 배열 말고 문자열로 바로 추가할 수 있음..
// reverse() 하는 위치 바꾸면 새 배열(reversed) 만들지 않아도 됨