function solution(spell, dic) {
  var answer = 0;
  dic = dic.filter((word) => word.length === spell.length)
  if(dic.length === 0) return answer = 2
  for(let i = 0; i < dic.length; i+=1){
      let cnt = 0
      for(let j = 0; j < spell.length; j+=1){
          if(dic[i].includes(spell[j])) cnt+=1
      }
      answer = cnt === spell.length ? 1 : 2
  }
  return answer;
}