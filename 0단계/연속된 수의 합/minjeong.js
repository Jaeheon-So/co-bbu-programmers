function solution(num, total) {
  let answer = [];
  let a = ((2 * total) / num + 1 - num) / 2;
  for (let i = 0; i < num; i += 1) {
    answer.push(a + i);
  }
  return answer;
}
