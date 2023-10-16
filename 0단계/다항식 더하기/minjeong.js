function solution(p) {
  const newP = p.split(" + ");
  let xNumber = 0;
  let constNumber = 0;
  for (let x of newP) {
    if (x.includes("x")) {
      if (Number(x[0])) {
        const splitNumber = x.split("x");
        xNumber += Number(splitNumber[0]);
      } else {
        xNumber += 1;
      }
    } else {
      constNumber += Number(x);
    }
  }

  let answer = "";
  if (xNumber) {
    answer += xNumber === 1 ? "x" : `${xNumber}x`;
  }
  if (constNumber) {
    if (answer) {
      answer += ` + ${constNumber}`;
    } else {
      answer += constNumber;
    }
  }
  return answer;
}
