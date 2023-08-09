function solution(new_id) {
  let answer = "";
  answer = new_id
    .toLowerCase()
    .replace(/[^\w-\.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.{1,}|\.{1,}$/, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/^\.{1,}|\.{1,}$/, "");
  answer = answer.padEnd(3, answer[answer.length - 1]);
  return answer;
}
