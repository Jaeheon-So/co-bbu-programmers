const solution = (answers) => {
  let answer = [];
  let len = [0, 0, 0];

  let num1 = [1, 2, 3, 4, 5];
  let num2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (num1[i % 5] == answers[i]) len[0]++;
    if (num2[i % 8] == answers[i]) len[1]++;
    if (num3[i % 10] == answers[i]) len[2]++;
  }

  for (let i = 0; i < len.length; i++) {
    if (len[i] === Math.max(...len)) answer.push(i + 1);
  }

  return answer;
};

console.log(solution([3, 3, 1, 1, 3, 3]));
