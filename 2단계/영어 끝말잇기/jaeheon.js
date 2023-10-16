function solution(n, words) {
  let stack = [words[0]];

  for (let i = 1; i < words.length; i++) {
    if (
      stack.includes(words[i]) ||
      words[i][0] !== words[i - 1][words[i - 1].length - 1]
    )
      return [(i % n) + 1, Math.floor(i / n) + 1];
    stack.push(words[i]);
  }

  return [0, 0];
}
