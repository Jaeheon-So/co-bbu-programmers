function solution(n, m, section) {
  var answer = 0;
  let maxRange = -Infinity;
  section.forEach((range) => {
    if (maxRange < range) {
      answer += 1;
      maxRange = range + m - 1;
    }
  });
  return answer;
}
