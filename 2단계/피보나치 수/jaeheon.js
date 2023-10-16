function solution(n) {
  let dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp.push(BigInt(dp[i - 1]) + BigInt(dp[i - 2]));
  }

  return BigInt(dp[n]) % BigInt(1234567);
}
