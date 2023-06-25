function solution(s, n) {
  var answer = '';
  for(let i = 0; i < s.length; i+=1){
      
      let char = '';
      
      char = s[i] === ' ' ? ' ' : s[i].charCodeAt();
      
      if (char >= 65 && char <= 90 && char + n > 90) {
          char = char - 26 + n;
      } else if (char >= 97 && char <= 122 && char + n > 122) {
          char = char - 26 + n;
      } else {
          char = char + n;
      }
      
      answer += s[i] === ' ' ? ' ' : String.fromCharCode(char);
  }
  
  return answer;
}