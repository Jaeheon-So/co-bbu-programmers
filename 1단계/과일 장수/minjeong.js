function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  let box = [];
  while (score.length > 0) {
    if (box.length === m) {
      answer += Math.min(...box) * m;
      box = [];
    } else {
      box.push(score.shift());
    }
  }
  if (box.length === m) {
    answer += Math.min(...box) * m;
  }
  return answer;
}

// 위 풀이 시간 초과 나서 이전 풀이 참고
function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  for (let i = m - 1; i < score.length; i += m) {
    answer += score[i] * m;
  }
  return answer;
}
