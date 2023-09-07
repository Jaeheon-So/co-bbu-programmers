function solution(N, stages) {
  let failure = [];
  let answer = [];

  for (let i = 1; i <= N; i++) {
    let yet = stages.filter((s) => s === i).length;
    let success = stages.filter((s) => s >= i).length;
    failure.push([success ? yet / success : 0, i]);
  }

  failure.sort((a, b) => {
    if (a[1] === b[1]) return a[1] - b[1];
    return b[0] - a[0];
  });

  failure.forEach((v) => {
    answer.push(v[1]);
  });

  return answer;
}
