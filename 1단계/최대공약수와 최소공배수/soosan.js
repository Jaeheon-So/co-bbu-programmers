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

// 유클리드 호제법
// num1 % num2 = r //  GCD(num1, num2) = GCD(num2, r)
// let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
