function solution(lottos, win_nums) {
  var answer = [];
  let rank = [6, 6, 5, 4, 3, 2, 1]
  
  let zeroL = 0
  for(let i=0; i<lottos.length; i+=1){
      if(lottos[i] === 0) zeroL += 1
  }
  
  let sameL = lottos.filter(lotto => win_nums.includes(lotto)).length
  
  let hGrade = sameL + zeroL
  let lGrade = sameL
  
  answer = [rank[hGrade], rank[lGrade]]
  
  //
  //let maxCount = 0
  //let minCount = 0
  //for(let i = 0; i < 6; i+=1) {
  //    if(lottos[i] === 0)
  //        maxCount += 1
  //    for(let j = 0; j < 6; j+=1){
  //        if(lottos[i] === win_nums[j]){
  //            maxCount += 1
  //            minCount += 1
  //        }
  //    }
  //}
  //answer = [rank[maxCount], rank[minCount]]
  return answer;
}// 질문하기 풀이 참고