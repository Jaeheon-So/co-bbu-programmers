function solution(n) {
  var answer = 0;
  let nToBi = n.toString(2);
  let nCnt = 0;
  for (let x of nToBi) {
    if (x === "1") nCnt += 1;
  }
  let nextN = n + 1;
  while (n <= 1000000) {
    let nextNToBi = nextN.toString(2);
    let nextNCnt = 0;
    for (let x of nextNToBi) {
      if (x === "1") nextNCnt += 1;
    }
    if (nextNCnt === nCnt) {
      answer = nextN;
      break;
    } else nextN += 1;
  }
  return answer;
}
