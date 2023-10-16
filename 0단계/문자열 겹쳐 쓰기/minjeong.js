function solution(my_string, overwrite_string, s) {
  return (
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length)
  );
}

function solution(my_string, overwrite_string, s) {
  let answer = my_string.split("");
  answer.splice(s, overwrite_string.length, overwrite_string);
  return answer.join("");
}
