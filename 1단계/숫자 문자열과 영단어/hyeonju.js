function solution(s) {
  const list = [[0, 'zero'], [1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'],
  [5, 'five'], [6, 'six'], [7, 'seven'], [8, 'eight'], [9, 'nine']]
  for (let [num, eng] of list) {
    let pattern = new RegExp(eng, "g")
    if (s.includes(eng)) {
      s = s.replace(pattern, num)
    }
  }
  return +s;
}