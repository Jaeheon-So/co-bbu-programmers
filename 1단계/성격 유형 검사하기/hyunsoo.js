function solution(survey, choices) {
  var answer = '';
  let obj = {'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0}
  const score = {1:3, 2:2, 3:1, 4:0, 5:1, 6:2, 7:3}
  for(let i = 0; i < survey.length; i+=1){
      if(choices[i] > 4) {
          obj[survey[i][1]] += score[choices[i]]
          
      } else if (choices[i] < 4) {
          
          obj[survey[i][0]] += score[choices[i]]
      }
      
  }
  
  obj.R >= obj.T ? answer += 'R' : answer += 'T'
  obj.C >= obj.F ? answer += 'C' : answer += 'F'
  obj.J >= obj.M ? answer += 'J' : answer += 'M'
  obj.A >= obj.N ? answer += 'A' : answer += 'N'
  return answer;
}