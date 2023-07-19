function solution(n) {
  let primeNum = 0
  const nums = Array.from({length: n}, x => true)
  for (let i = 2; i <= n; i ++) {
      nums[i] = true;      
  }
  for (let i = 2; i <=n; i ++) {
    if (nums[i]){
      primeNum ++;
      for (let j = i * i; j <= n; j += i) {
        nums[j] = false;
      }
    }
  }
  return primeNum
}