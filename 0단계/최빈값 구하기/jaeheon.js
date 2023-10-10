function solution(array) {
  let nums = [];
  let map = array.reduce((res, n) => ({ ...res, [n]: (res[n] || 0) + 1 }), {});
  let max = Math.max(...Object.values(map));

  for (let key in map) {
    if (map[key] === max) nums.push(Number(key));
    if (nums.length > 1) return -1;
  }

  return nums[0];
}
