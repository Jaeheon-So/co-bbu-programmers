function solution(str_list) {
  let answer = [];
  for (let i = 0; i < str_list.length; i += 1) {
    if (str_list[i] === "r") {
      answer.push(...str_list.slice(i + 1, str_list.length));
      break;
    } else if (str_list[i] === "l") {
      answer.push(...str_list.slice(0, i));
      break;
    }
  }
  return answer;
}
