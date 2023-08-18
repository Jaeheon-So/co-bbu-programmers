function solution(sides) {
  let answer = 0
  sides.sort((a, b) => b - a)
  let big = sides[0]
  let small = sides[1]
  for (let i = 1; i < (big + small); i += 1) {
    if (small + i > big) {
      answer += 1
    } else if (i < big + small && small + i > big) {
      answer += 1
    }
  }
  return answer;
}