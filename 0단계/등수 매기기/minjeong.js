function solution(score) {
  let answer = [];
  for (let i = 0; i < score.length; i += 1) {
    answer.push(1);
  }
  for (let i = 0; i < score.length; i += 1) {
    for (let j = 0; j < score.length; j += 1) {
      if (score[i][0] + score[i][1] > score[j][0] + score[j][1]) {
        answer[j] += 1;
      }
    }
  }
  return answer;
}
