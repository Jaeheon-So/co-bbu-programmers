function solution(nums) {
  var answer = 0;
  for(let i = 0; i < nums.length-2; i+=1){
      for(let j = i+1; j < nums.length-1; j+=1){
          for(let k = j+1; k < nums.length; k+=1){
              let sum = nums[i]+nums[j]+nums[k]
              if(isPrime(sum)) answer += 1                
          }
      }
  }
  // 소수인지 판별하기
  function isPrime(sum) {
      for(let i = 3; i < sum; i++) {
          if(sum % i === 0) return false;
      }            
      return true;
  }    
  return answer;
}