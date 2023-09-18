function solution(a, b) {
  return factorization(reduce(a, b)) === 1 ? 1 : 2;
}

function factorization(n) {
  while (n % 2 === 0) n /= 2;
  while (n % 5 === 0) n /= 5;
  return n;
}

function reduce(n, d) {
  while (true) {
    let flag = true;
    for (let i = 2; i <= Math.min(n, d); i++) {
      if (n % i === 0 && d % i === 0) {
        n /= i;
        d /= i;
        flag = false;
        break;
      }
    }
    if (flag) return d;
  }
}
