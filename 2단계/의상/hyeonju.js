function solution(clothes) {
  let answer = 1;
  const map = new Map;
  for (let [item, category] of clothes) {
    if (map.get(category)) {
      map.set(category, [...map.get(category), item])
    } else {
      map.set(category, [item])
    }
  }
  console.log(map)
  for (let [key, value] of map) {
    answer *= value.length + 1 // 해당 카테고리에서 안 입었을 경우 +1
  }
  return answer - 1 // 아무것도 착용하지 않을수는 없음 -1
}