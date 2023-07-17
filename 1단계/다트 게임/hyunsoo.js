function solution(dartResult) {
  let other = 0, now = '', before = ''

  for(let idx=0;idx<dartResult.length;idx++){
      switch(dartResult[idx]){
          case 'S':
              now = now
              break
          case 'D':
              now = Math.pow(Number(now),2).toString()
              break
          case 'T':
              now = Math.pow(Number(now),3).toString()
              break
          case '*':
              before = String(Number(before) * 2)
              now = String(Number(now) * 2)
              break
          case '#':
              now = Number(-now).toString()
              break
          default:
              if(dartResult[idx+1] === '0' && dartResult[idx] === '1'){
                  other += Number(before)
                  before = now
                  now = '10'
                  idx++
              }
              else{
                  other += Number(before)
                  before = now
                  now = dartResult[idx]
              }
      } 
  }

  return Number(now) + Number(before) + other
}// 질문하기 풀이 참고