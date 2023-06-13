function solution(x, y) {
  let objX = {};
  let objY = {};
  let xS = x.toString().split("");
  let yS = y.toString().split("");
  let answer = [];

  xS.forEach((v) => {
    objX[v] = objX[v] ? objX[v] + 1 : 1;
  });
  yS.forEach((v) => {
    objY[v] = objY[v] ? objY[v] + 1 : 1;
  });

  const xKeys = Object.keys(objX);
  xKeys.forEach((xKey) => {
    if (objY[xKey]) {
      for (let i = 0; i < Math.min(objX[xKey], objY[xKey]); i++) {
        answer.push(xKey);
      }
    }
  });

  if (answer.length === 0) return "-1";

  answer.sort((a, b) => b - a);

  return Number(answer.join("")) === 0 ? "0" : answer.join("");
}
