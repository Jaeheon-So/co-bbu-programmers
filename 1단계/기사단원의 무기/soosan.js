const solution = (number, limit, power) => {
  let answer;
  let a = [];
  let b = [];

  for (let i = 0; i < number; i++) {
    let len = 0;

    for (let j = 0; j < number; j++) {
      if (i % j === 0) len++;
    }

    a.push(len);
  }

  a.forEach((v) => {
    if (v > limit) b.push(power);
    else b.push(v);
  });

  answer = b.reduce((cur, acc) => cur + acc, 0);

  return answer;
};

console.log(solution(5, 3, 2));
