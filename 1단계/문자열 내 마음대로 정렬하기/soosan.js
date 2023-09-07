const solution1 = (strings, n) => {
  return strings.sort().sort((a, b) => (a[n] >= b[n] ? 1 : -1));
};

// sort compareFunction 이해 더 필요.
