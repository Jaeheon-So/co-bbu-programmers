function solution(s) {
  var answer = '';
  s = s.toLowerCase()
  let arr = s.split(" ")
  answer = arr.map(el => el.charAt(0).toUpperCase() + el.slice(1))
  return answer.join(" ");
}