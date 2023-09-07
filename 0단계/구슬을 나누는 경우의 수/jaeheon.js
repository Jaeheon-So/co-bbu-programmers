function solution(balls, share) {
  let answer = 1;

  for (let i = 0; i < share; i++) answer *= (balls - i) / (share - i);

  return Math.round(answer);
}
