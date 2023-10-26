function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  const denom = denom1 * denom2;
  const firNumer = numer1 * denom2;
  const secNumer = denom1 * numer2;
  let GCD = (num1, num2) => (num2 > 0 ? GCD(num2, num1 % num2) : num1);
  answer.push((firNumer + secNumer) / GCD(denom, firNumer + secNumer));
  answer.push(denom / GCD(denom, firNumer + secNumer));
  return answer;
}
