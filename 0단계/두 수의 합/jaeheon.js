function solution(a, b) {
  //   let answer = "";
  //   let maxLen = Math.max(a.length, b.length);
  //   let temp = 0;

  //   a = a.padStart(maxLen, "0");
  //   b = b.padStart(maxLen, "0");

  //   for (let i = maxLen - 1; i >= 0; i--) {
  //     let sum = temp + Number(a[i]) + Number(b[i]);

  //     answer = (sum % 10).toString() + answer;

  //     if (sum >= 10) temp = 1;
  //     else temp = 0;
  //   }

  //   return temp === 1 ? "1" + answer : answer;
  return (BigInt(a) + BigInt(b)).toString();
}
