function solution(chicken) {
  var answer = 0;
  let extraCoupon = 0
  while(chicken >= 10) {        
      extraCoupon = Math.floor(chicken % 10)
      answer += Math.floor(chicken / 10)
      chicken = extraCoupon + Math.floor(chicken / 10)
  }    
  return answer;
}

// function solution(chicken) {
//   if (chicken == 0) return 0;
//   return Math.floor(((chicken -10) / 9) + 1)
// }