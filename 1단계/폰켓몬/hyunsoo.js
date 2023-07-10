function solution(nums) {
  var answer = 0;
  let set = new Set([...nums])
  answer = nums.length/2 > set.size ? set.size : nums.length/2    
  return answer;
}