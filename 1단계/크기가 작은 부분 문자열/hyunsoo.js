function solution(t, p) {
  var answer = 0;
  let strL = p.length;
  for(let i = 0; i <= t.length - strL; i+=1){
      let aaa = Number(t.slice(i, i + strL));
      if (aaa <= p) answer+=1;
  }
  return answer;
}