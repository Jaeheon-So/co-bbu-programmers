function solution(nums) {
  let getPocketMon = nums.length / 2;
  let map = new Map();
  for (let x of nums) {
    map.set(x, map.get(x) + 1 || 1);
  }
  return map.size > getPocketMon ? getPocketMon : map.size;
}

// 이전 풀이
function solution(nums) {
  let max = nums.length / 2; // N / 2
  let set = [...new Set(nums)]; // 중복을 없앤다.
  return set.length > max ? max : set.length;
}
