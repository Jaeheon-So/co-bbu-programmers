function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);
  let right = d.length;
  let sum = 0;
  while (right > 0) {
    for (let i = 0; i < right; i += 1) {
      sum += d[i];
    }
    if (sum <= budget) {
      answer = right;
      break;
    } else {
      right -= 1;
      sum = 0;
    }
  }
  return answer;
}
