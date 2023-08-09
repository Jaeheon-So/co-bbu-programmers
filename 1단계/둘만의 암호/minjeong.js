function solution(s, skip, index) {
  let answer = "";
  const skipNum = [];
  for (let x of skip) {
    skipNum.push(x.charCodeAt());
  }
  for (let x of s) {
    let convert = x.charCodeAt();
    for (let i = 0; i < index; i += 1) {
      convert += 1;
      while (skipNum.includes(convert)) convert += 1;

      if (convert === "z".charCodeAt() + 1) convert = "a".charCodeAt();
      while (skipNum.includes(convert)) convert += 1;
    }
    answer += String.fromCharCode(convert);
  }
  return answer;
}
