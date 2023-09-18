function solution(n, words) {
  var answer = [0, 0];
  let first = ''
  let last = ''
  for(let i = 0; i < words.length; i+=1){
      let word = words[i]
      first = words[i][0]
      if(words.slice(0, i).includes(words[i])){
          return answer = [i%n + 1, Math.floor(i/n) + 1]
      }
      
      if(last && last !== first){
          return answer = [i%n + 1, Math.floor(i/n) + 1]
      }
      last = words[i][words[i].length-1]
  }
  return answer;
}