function solution(strings, n) {
  var answer = [];
  let arr = [];
  strings.forEach(string => {
      const str = string.slice(n, n+1);
      arr.push(str+string);
  });
  
  arr = arr.sort();
  
  arr.forEach(string => {
      const item = string.slice(1);
      answer.push(item)
  });
  
  return answer;
}
// sort(), localeCompare()...