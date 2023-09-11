function solution(brown, yellow) {
  const total = brown + yellow;

  for (let i = 1; i < total; i++) {
    if (total % i === 0) {
      if ((i - 2) * (total / i - 2) === yellow) return [total / i, i];
    }
  }
}
