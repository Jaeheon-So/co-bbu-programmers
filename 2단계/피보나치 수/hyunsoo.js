function solution(n) {
  var answer = 0;
  let arr = new Array(n).fill(0)
  arr[1] = 1
  for(let i = 2; i <= n; i+=1){
      arr[i] = (arr[i-1] + arr[i-2]) % 1234567
  }
  answer = arr[n]
  return answer;
}