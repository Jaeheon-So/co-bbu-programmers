function solution(quiz) {
  let answer = [];
  let math = [];
  let result = 0;
  for (let x of quiz) {
    math.push(x.split(" "));
  }
  for (let i = 0; i < math.length; i += 1) {
    for (let j = 0; j < math[i].length; j += 1) {
      if (math[i][j] === "+") {
        result = Number(math[i][0]) + Number(math[i][2]);
        if (result === Number(math[i][4])) {
          answer.push("O");
        } else answer.push("X");
      } else if (math[i][j] === "-") {
        result = Number(math[i][0]) - Number(math[i][2]);
        if (result === Number(math[i][4])) {
          answer.push("O");
        } else answer.push("X");
      }
    }
  }
  return answer;
}
