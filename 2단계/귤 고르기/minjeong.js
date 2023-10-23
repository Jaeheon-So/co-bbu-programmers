function solution(k, tangerine) {
  var answer = 0;
  let map = new Map();
  for (let x of tangerine) {
    map.set(x, map.get(x) + 1 || 1);
  }
  const arr = [...map];
  arr.sort((a, b) => {
    if (b[1] === a[1]) {
      return b[0] - a[0];
    } else {
      return b[1] - a[1];
    }
  });
  for (let i = 0; i < arr.length; i += 1) {
    if (k - arr[i][1] <= 0) {
      answer += 1;
      break;
    } else {
      k -= arr[i][1];
      answer += 1;
    }
  }
  return answer;
}
