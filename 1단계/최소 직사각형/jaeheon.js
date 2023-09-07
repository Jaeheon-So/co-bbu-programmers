function solution(sizes) {
  let wMax = 0;
  let hMax = 0;

  sizes.forEach((s) => {
    if (s[0] < s[1]) {
      wMax = Math.max(wMax, s[1]);
      hMax = Math.max(hMax, s[0]);
    } else {
      wMax = Math.max(wMax, s[0]);
      hMax = Math.max(hMax, s[1]);
    }
  });

  return wMax * hMax;
}
