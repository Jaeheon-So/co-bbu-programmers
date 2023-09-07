function solution(a, b) {
  var answer = '';
  const days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let date = 0;
  for(let i = 0; i < a-1; i+=1){
      date += month[i]
  }
  answer = days[((date + b + 4) % 7)]
  return answer;
}