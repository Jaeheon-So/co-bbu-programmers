function solution(cards1, cards2, goal) {
  var answer = 'Yes';
  let result = []
  for(let j=0; j<goal.length; j+=1){
      let tmp = goal[j]
      if(cards1[0] === tmp){
          //console.log('🍪', j)
          result.push(tmp)
          cards1.shift()
      }
      if(cards2[0] === tmp){
          //console.log('👻', j)
          result.push(tmp)
          cards2.shift()
      }
      //console.log(tmp, result)
      if(result[j] !== goal[j]) return answer = 'No'
  }
  return answer;
}