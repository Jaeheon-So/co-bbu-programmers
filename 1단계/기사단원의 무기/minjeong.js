function solution(number, limit, power) {
  var answer = 0;
  for (let i = 1; i <= number; i += 1) {
    let cnt = 0;
    for (let j = 1; j <= Math.sqrt(i); j += 1) {
      if (i % j === 0) {
        cnt += 1;
        if (j ** 2 !== i) {
          cnt += 1;
        }
      }
    }
    if (cnt > limit) {
      answer += power;
    } else answer += cnt;
  }
  return answer;
}
