function solution(d, budget) {
  var answer = 0;
  let sum = 0;
  const arr = d.sort((a, b) => a-b);
  for(let i = 0; i < arr.length; i+=1){
      if(arr[i] <= budget){
          answer += 1;
          budget -= arr[i];
      }
  }
  return answer;
}