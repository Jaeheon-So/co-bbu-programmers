function solution(array) {
  var answer = 0;
  let map = new Map();
  for (let x of array) {
    map.set(x, map.get(x) + 1 || 1);
  }
  const sortMap = [...map].sort((a, b) => b[1] - a[1]);
  answer =
    sortMap.length === 1 || sortMap[0][1] > sortMap[1][1] ? sortMap[0][0] : -1;
  return answer;
}
