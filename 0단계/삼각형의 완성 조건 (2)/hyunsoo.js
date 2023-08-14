function solution(sides) {
  var answer = 0;
  let el = Math.max(...sides)
  let min = Math.min(...sides)
  answer = (el - min) === 1 ? 1 : (el - (el - min)) + (min - 1)
  return answer;
}