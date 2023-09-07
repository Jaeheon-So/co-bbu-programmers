function solution(new_id) {
  var answer = [];
  new_id = new_id.toLowerCase();

  let del = new_id.match(/[^a-z0-9-_.]/g);
  if (del) {
    for (let x of new_id) {
      let idx = del.indexOf(x);
      if (idx !== -1) new_id = new_id.replace(x, "");
    }
  }

  for (let i = 0; i < new_id.length; i++) {
    if (new_id[i] !== "." || !(new_id[i] === "." && new_id[i - 1] === ".")) answer.push(new_id[i]);
  }

  while (answer[0] === "." || answer[answer.length - 1] === ".") {
    if (answer[0] === ".") answer.shift();
    else answer.pop();
  }
  answer = answer.join("");

  if (!answer) answer = "a";
  if (answer.length >= 16) answer = answer.slice(0, 15);
  while (answer[answer.length - 1] === ".") {
    answer = answer.slice(0, answer.length - 1);
  }
  while (answer.length < 3) {
    answer += answer[answer.length - 1];
  }

  return answer;
}
