const solution = (N, stages) => {
  var answer = [];
  let rate = [];

  for (let i = 1; i <= N; i++) {
    rate.push([i, stages.filter((v) => v === i).length / stages.filter((v) => i < v).length]);
  }

  rate
    .sort((a, b) => {
      if (a[1] === b[1]) return a[1] - b[1];
      return b[1] - a[1];
    })
    .forEach((v) => {
      answer.push(v[0]);
    });

  return answer;
};
