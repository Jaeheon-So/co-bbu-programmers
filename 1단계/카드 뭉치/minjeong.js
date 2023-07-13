function solution(cards1, cards2, goal) {
  var answer = "No";
  let firCnt = 0;
  let secCnt = 0;
  if (cards1[0] === goal[0]) {
    firCnt += 1;
    for (let i = 1; i < goal.length; i += 1) {
      if (cards1[firCnt] === goal[i]) {
        firCnt += 1;
      } else if (cards2[secCnt] === goal[i]) {
        secCnt += 1;
      }
    }
    firCnt + secCnt === goal.length ? (answer = "Yes") : (answer = "No");
  } else if (cards2[0] === goal[0]) {
    secCnt += 1;
    for (let i = 1; i < goal.length; i += 1) {
      if (cards1[firCnt] === goal[i]) {
        firCnt += 1;
      } else if (cards2[secCnt] === goal[i]) {
        secCnt += 1;
      }
    }
    firCnt + secCnt === goal.length ? (answer = "Yes") : (answer = "No");
  }
  return answer;
}
