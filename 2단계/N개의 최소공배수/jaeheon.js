function solution(arr) {
  return arr.reduce((res, n) => (n * res) / gcd(n, res), 1);
}

function gcd(a, b) {
  if (b == 0) return a;
  else return gcd(b, a % b);
}

function lcm(a, b) {
  let res = Math.max(a, b);
  while (true) {
    if (res % a === 0 && res % b === 0) return res;
    res++;
  }
}
