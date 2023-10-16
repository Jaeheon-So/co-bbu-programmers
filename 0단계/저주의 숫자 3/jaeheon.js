function solution(n) {
  let cnt = 1;
  let stack = [];

  while (stack.length < n) {
    if (cnt % 3 !== 0 && !cnt.toString().includes("3")) stack.push(cnt);
    cnt++;
  }

  return stack[n - 1];
}
