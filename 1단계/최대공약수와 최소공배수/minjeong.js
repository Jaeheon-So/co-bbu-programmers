function solution(n, m) {
  let gcd = (n, m) => (n % m === 0 ? m : gcd(m, n % m));
  let lcm = (n, m) => (n * m) / gcd(n, m);
  return [gcd(n, m), lcm(n, m)];
}
