function solution(k, score) {
  let answer = [];

  if (score.length < k) {
    let honor = [];
    for (let x of score) {
      honor.push(x);
      answer.push(Math.min(...honor));
    }
  } else {
    for (let i = 0; i < k; i += 1) {
      answer.push(Math.min(...score.slice(0, i + 1)));
    }
    let honor = score.slice(0, k);
    for (let i = k; i < score.length; i += 1) {
      honor.push(score[i]);
      honor.sort((a, b) => a - b);
      honor.shift();
      answer.push(honor[0]);
    }
  }
  return answer;
}

// 이전 풀이
function solution(k, score) {
  const answer = [];
  const honor = [];
  for (let i = 0; i < score.length; i += 1) {
    if (i < k) {
      honor.push(score[i]);
    }
    if (score[i] > Math.min(...honor)) {
      honor.pop();
      honor.push(score[i]);
      honor.sort((a, b) => b - a);
    }
    answer.push(honor.at(-1));
  }
  return answer;
}
