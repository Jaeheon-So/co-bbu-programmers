function solution(name, yearning, photo) {
  var answer = [];    
  for(let img of photo){
      let score = 0;
      for(let person of img){
          score += name.includes(person) ? yearning[name.indexOf(person)] : 0;
      }
      answer.push(score);
  }
  return answer;
}
