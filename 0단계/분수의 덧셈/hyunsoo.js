function solution(n1, d1, n2, d2) {
  const num = n1 * d2 + n2 * d1, denom = d1 * d2
  for(let i = denom; i>=2; i-=1){
      if(num%i===0 && denom%i===0) return [num/i, denom/i]
  }
  return [num, denom]
}