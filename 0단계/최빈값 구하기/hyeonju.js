function solution(array) {
  let same = false
  let answer = [0, 0]
  let arrMap = new Map()
  if (array.length === 1) return array[0]

  array.map(item => {
    if (arrMap.has(item)) {
      arrMap.set(item, arrMap.get(item) + 1)
    } else {
      arrMap.set(item, 1)
    }
  })

  for (let [key, val] of arrMap) {
    if (val === answer[1]) same = true
    else if (val > answer[1]) {
      answer = [key, val]
      same = false
    }
  }

  return same ? -1 : answer[0];
}