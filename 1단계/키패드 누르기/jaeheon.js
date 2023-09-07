function solution(numbers, hand) {
  let answer = "";
  const cord = [
    [0, 0],
    [-1, 3],
    [0, 3],
    [1, 3],
    [-1, 2],
    [0, 2],
    [1, 2],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];
  let l = [-1, 0];
  let r = [1, 0];

  numbers.forEach((n) => {
    if (n === 1 || n === 4 || n === 7) {
      answer += "L";
      l = cord[n];
    } else if (n === 3 || n === 6 || n === 9) {
      answer += "R";
      r = cord[n];
    } else {
      let ld = Math.abs(cord[n][0] - l[0]) + Math.abs(cord[n][1] - l[1]);
      let rd = Math.abs(cord[n][0] - r[0]) + Math.abs(cord[n][1] - r[1]);
      if (ld > rd) {
        answer += "R";
        r = cord[n];
      } else if (ld < rd) {
        answer += "L";
        l = cord[n];
      } else {
        if (hand === "right") {
          answer += "R";
          r = cord[n];
        } else {
          answer += "L";
          l = cord[n];
        }
      }
    }
  });
  return answer;
}
