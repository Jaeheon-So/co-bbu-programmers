function solution(dart) {
  let score = [];
  let num = "";
  let temp = 0;

  for (let x of dart) {
    if (!isNaN(x)) {
      num += x;
      continue;
    } else {
      if (!isNaN(num)) temp = Number(num);
      num = "";
      if (x === "S") score.push(temp);
      else if (x === "D") score.push(temp ** 2);
      else if (x === "T") score.push(temp ** 3);
      else if (x === "*") {
        if (score.length === 1) score[score.length - 1] *= 2;
        else {
          score[score.length - 1] *= 2;
          score[score.length - 2] *= 2;
        }
      } else if (x === "#") score[score.length - 1] *= -1;
    }
  }

  return score.reduce((a, b) => a + b);
}
