function solution(s, skip, index) {
  var answer = [];
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
  skip.split('').forEach(str => {
      alphabet.splice(alphabet.indexOf(str) ,1)
  })
  
  answer = s.split('').map(str => {
      return alphabet[(alphabet.indexOf(str)+index) % alphabet.length]
  })
  return answer.join('');
}