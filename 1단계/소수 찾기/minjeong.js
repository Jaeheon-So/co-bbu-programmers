function solution(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i * i <= n; i += 1) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter((e) => e).length;
}

// 이전 풀이
function solution(n) {
  let answer = 0;
  let arr = Array(n + 1).fill(0);
  for (let i = 0; i <= n; i += 1) {
    arr[i] = i;
  }
  arr[1] = 0;
  for (let i = 2; i <= n; i += 1) {
    if (arr[i] === 0) continue;
    for (let j = i * 2; j <= n; j += i) {
      arr[j] = 0;
    }
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== 0) {
      answer += 1;
    }
  }
  return answer;
}
