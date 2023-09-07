function solution(my_string, queries) {
  var answer = '';
  let word = my_string.split('')
  for(let i = 0; i < queries.length; i+=1){
      let reverseStr = word.slice(queries[i][0], queries[i][1]+1).reverse()
      word.splice(queries[i][0], queries[i][1]+1 - queries[i][0], ...reverseStr)
      
  }
  answer = word.join('')
  return answer;
}