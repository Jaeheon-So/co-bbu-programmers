function solution(s) {
  var answer = "";
  let word = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let temp = "";

  for (let x of s) {
    if (!isNaN(x)) answer += x;
    else {
      temp += x;
      if (word.indexOf(temp) !== -1) {
        answer += word.indexOf(temp);
        temp = "";
      }
    }
  }

  return parseInt(answer);
}
