function solution(arr, queries) {
  var answer = [];
  for(let i = 0; i < queries.length; i+=1){
      let [s, e, k] = queries[i]
      let result = []
      for(let j = s; j <= e; j+=1){
          if(arr[j] > k){
              result.push(arr[j])
          }
      }
      let ans = result.length === 0 ? -1 : Math.min(...result)
      answer.push(ans)
  }
  return answer;
}