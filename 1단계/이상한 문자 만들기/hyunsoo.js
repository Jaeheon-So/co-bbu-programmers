function solution(s) {
  var answer = '';
  let arr = s.split(' ');
  for (let i = 0; i < arr.length; i+=1){
      for (let j = 0; j < arr[i].length; j+=1){
          answer += j%2 === 0 
          ? arr[i][j].replace(arr[i][j], arr[i][j].toUpperCase())
          : arr[i][j].replace(arr[i][j], arr[i][j].toLowerCase());
      }
      answer += ' ';
  }
  return answer = answer.slice(0, -1);;
}
// charAt() 을 이용했으면 for문을 한번만 돌 수 있었을 것..