function solution(k, tangerine) {
  let sum = 0, cnt = 0
  let objs = new Map()
  tangerine.forEach(val => {
      objs.set(val, (objs.get(val) || 0) + 1)        
  })
  objs = [...objs].sort((a, b) => b[1]-a[1])
  for(let [, val] of objs){
      sum += val
      cnt += 1
      if(sum >= k) break
  }
  return cnt;
}