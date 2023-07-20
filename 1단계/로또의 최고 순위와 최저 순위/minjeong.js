function solution(lottos, win_nums) {
  var answer = [];
  let zero = 0;
  for (let x of lottos) {
    if (x === 0) zero += 1;
  }
  let cnt = 0;
  lottos.forEach((num) =>
    win_nums.forEach((winNum) => num === winNum && (cnt += 1))
  );
  answer.push(7 - (cnt + zero) === 7 ? 6 : 7 - (cnt + zero));
  answer.push(7 - cnt === 7 ? 6 : 7 - cnt);
  return answer;
}

// 이전 풀이
function solution(lottos, win_nums) {
  let answer = [];
  let score = 0;
  let removeNum = [];
  for (let x of lottos) {
    if (x === 0) removeNum.push(x);
    for (let s of win_nums) {
      if (x === s) score += 1;
    }
  }
  let rank = [];
  rank.push(score);
  for (let i = 1; i <= removeNum.length; i += 1) {
    score += 1;
    rank.push(score);
  }
  let max = Math.max(...rank);
  let min = Math.min(...rank);
  if (max === 6) {
    answer.push(1);
  } else if (max === 5) {
    answer.push(2);
  } else if (max === 4) {
    answer.push(3);
  } else if (max === 3) {
    answer.push(4);
  } else if (max === 2) {
    answer.push(5);
  } else answer.push(6);

  if (min === 6) {
    answer.push(1);
  } else if (min === 5) {
    answer.push(2);
  } else if (min === 4) {
    answer.push(3);
  } else if (min === 3) {
    answer.push(4);
  } else if (min === 2) {
    answer.push(5);
  } else answer.push(6);
  return answer;
}
