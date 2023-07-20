//시간초과
function solution(number, limit, power) {
  let divisorArr = Array(number).fill(1)
  let answer = 0;
  for (let i = 1; i <= number; i += 1) {
    for (let j = 1; j <= parseInt(i / 2); j += 1) {
      if (i % j === 0) {
        divisorArr[i - 1] += 1
      }
    }
    answer += divisorArr[i - 1] <= limit ? divisorArr[i - 1] : power
  }
  return answer;
}

//통과