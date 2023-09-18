function solution(score) {
  var answer = [];
  let avg = score.map(v=>(v[0]+v[1])/2);
  
  let sorted = avg.slice().sort((a,b)=>b-a);
  
  answer = avg.map(v => sorted.indexOf(v) + 1);
  return answer;
}