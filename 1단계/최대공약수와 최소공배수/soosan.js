const solution = (n, m) => {
  var answer = [];
  let max = Math.max(n, m);
  let g = 0;
  let l = 0;

  for (let i = 0; i <= max; i++) {
    if (n % i === 0 && m % i === 0) g = i;
  }

  l = (n * m) / g;
  answer = [g, l];

  return answer;
};

console.log(solution(3, 12));
