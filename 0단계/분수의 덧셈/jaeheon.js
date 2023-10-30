function solution(numer1, denom1, numer2, denom2) {
  let denom3 = lcm(denom1, denom2);
  let numer3 = numer1 * (denom3 / denom1) + numer2 * (denom3 / denom2);
  let n = gcd(numer3, denom3);

  return [numer3 / n, denom3 / n];
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
