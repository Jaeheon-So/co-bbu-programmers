function solution(s, n) {
  let answer = "";

  for (let x of s) {
    if (x === " ") answer += " ";
    else {
      let ascii = x.charCodeAt();
      if (65 <= ascii && ascii <= 90) {
        if (ascii + n > 90) answer += String.fromCharCode(64 + ascii + n - 90);
        else answer += String.fromCharCode(ascii + n);
      } else {
        if (ascii + n > 122)
          answer += String.fromCharCode(96 + ascii + n - 122);
        else answer += String.fromCharCode(ascii + n);
      }
    }
  }

  return answer;
}
