function solution(s) {
  var answer = 0;
  let str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  for(let i = 0; i < str.length; i+=1){
      const arr = s.split(str[i]);
      s = arr.join(i);
  }
  answer = Number(s);
  return answer;
}