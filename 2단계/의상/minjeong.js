function solution(clothes) {
  var answer = 1;
  const map = new Map();
  for (let [a, b] of clothes) {
    if (map.get(b)) {
      map.set(b, [...map.get(b), a]);
    } else {
      map.set(b, [a]);
    }
  }

  for (let [k, v] of map) {
    answer *= v.length + 1;
  }
  return answer - 1;
}
