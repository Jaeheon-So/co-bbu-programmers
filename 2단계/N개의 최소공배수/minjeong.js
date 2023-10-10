function solution(arr) {
  arr.sort((a, b) => b - a);
  let answer = 0;
  let isDivide = false;
  let whileCount = arr[0];
  while (!isDivide) {
    isDivide = arr.every((number) => whileCount % number === 0);
    if (isDivide) {
      answer = whileCount;
      break;
    }
    whileCount++;
  }
  return answer;
}
