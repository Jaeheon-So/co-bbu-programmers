function solution(c) {
  return c[2] - c[1] === c[1] - c[0]
    ? c.at(-1) + c[1] - c[0]
    : (c.at(-1) * c[1]) / c[0];
}
