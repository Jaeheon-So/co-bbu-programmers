function solution(s) {
  let num = [
    /zero/g,
    /one/g,
    /two/g,
    /three/g,
    /four/g,
    /five/g,
    /six/g,
    /seven/g,
    /eight/g,
    /nine/g,
  ];
  for (let i = 0; i <= 9; i += 1) {
    s = s.replace(num[i], i);
  }
  return +s;
}
