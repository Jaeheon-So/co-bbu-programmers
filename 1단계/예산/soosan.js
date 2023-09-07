const solution = (d, budget) => {
  let answer = 0;
  let temp = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (d[i] + temp <= budget) {
      temp += d[i];
      answer++;
    }
  }

  return answer;
};
