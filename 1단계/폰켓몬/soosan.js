function solution(nums) {
  var answer = 0;
  let set = new Set()

  for (let s of nums) {
    set.add(s)
  }

  if (set.size > nums.length / 2) answer = nums.length / 2
  else answer = set.size

  return answer;
}