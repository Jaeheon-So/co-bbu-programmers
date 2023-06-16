function solution(answers) {
  let answer = [1];
  let n1 = [1, 2, 3, 4, 5];
  let n2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let n3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let point = { 1: 0, 2: 0, 3: 0 };

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === n1[i % 5]) point["1"]++;
    if (answers[i] === n2[i % 8]) point["2"]++;
    if (answers[i] === n3[i % 10]) point["3"]++;
  }

  for (let key in point) {
    if (key === "1") continue;
    let temp = point[key];

    if (point[answer[0]] < temp) answer = [Number(key)];
    else if (point[answer[0]] === temp) answer.push(Number(key));
  }
  return answer.sort((a, b) => a - b);
}
