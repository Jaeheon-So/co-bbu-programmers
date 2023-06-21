function solution(n, m) {
  var answer = [];
  // 유클리드 호제법
  // 정수 a와 b가 있을 때, a를 b로 나눈 a = q * b + r 에서 a와 b의 최대공약수가 b와 r의 최대공약수와 같음(q는 몫, r은 나머지).
  const gcd = (a, b) => {
      if (b == 0) return a;
      return gcd(b, (a % b));
  }
  const lcm = (a, b) => {
      return (a * b) / gcd(a, b);
  }
  
  answer.push(gcd(n,m), lcm(n,m));
  return answer;
}