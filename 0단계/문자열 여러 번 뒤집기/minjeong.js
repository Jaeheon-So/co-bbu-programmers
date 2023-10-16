function solution(my_string, queries) {
  var answer = my_string.split("");
  for (let [x, y] of queries) {
    answer = answer.join("").split("");
    const sliceStr = answer.slice(x, y + 1);
    const reverseStr = sliceStr.reverse().join("");
    answer.splice(x, y - x + 1, reverseStr);
  }
  answer = answer.join("");
  return answer;
}
