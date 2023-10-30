function solution(num, total) {
  if (num === 1) return [total];

  let arr = [1000];
  let sum = arr[0];

  for (let i = 0; i < num - 1; i++) {
    arr.unshift(arr[0] - 1);
    sum += arr[0];
  }

  while (sum !== total) {
    arr.pop();
    arr.unshift(arr[0] - 1);
    sum -= num;
  }

  return arr;
}
