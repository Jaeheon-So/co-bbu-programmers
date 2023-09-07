const solution = (dartResult) => {
  var answer = 0;
  let answerArr = [];
  let num = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        num = 10;
        i++;
      } else num = dartResult[i];
    } else if (dartResult[i] === "S") answerArr.push(num);
    else if (dartResult[i] === "D") answerArr.push(num ** 2);
    else if (dartResult[i] === "T") answerArr.push(num ** 3);
    else if (dartResult[i] === "#") answerArr[answerArr.length - 1] *= -1;
    else if (dartResult[i] === "*") {
      answerArr[answerArr.length - 1] *= 2;
      answerArr[answerArr.length - 2] *= 2;
    }
  }

  for (let x of answerArr) {
    answer += Number(x);
  }

  return answer;
};
