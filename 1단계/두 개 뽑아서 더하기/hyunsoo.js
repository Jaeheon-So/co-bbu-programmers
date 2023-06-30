function solution(numbers) {
  var answer = [];    
  for(let i = 0; i<numbers.length; i+=1){
      for(let j = i+1; j<numbers.length; j+=1){
          answer.push(numbers[i] + numbers[j]);
      }
  }    
  answer.sort((a, b) => a - b);    
  return answer = [...new Set(answer)];
}
//sort를 for문 전에 돌릴 때, 나중에 돌릴 때 차이가 뭐지..