function solution(arr) {
  let stk = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (stk === []) stk.push(arr[i])
    else if (stk[stk.length - 1] === arr[i]) stk.pop()
    else stk.push(arr[i])

  }
  if (!stk.length) return [-1]
  return stk;
}