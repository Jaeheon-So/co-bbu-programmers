function solution(arr) {
  let stack = [];

  arr.forEach((n) => {
    if (stack.length === 0 || stack[stack.length - 1] !== n) stack.push(n);
  });

  return stack;
}
