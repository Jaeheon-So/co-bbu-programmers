const solution = (numbers, hand) => {
  let answer = "";
  let left = "*";
  let right = "#";

  const findHand = (num) => {
    let keypad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ["*", 0, "#"],
    ];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (keypad[i][j] === num) {
          return [i, j];
        }
      }
    }
  };

  numbers.forEach((v) => {
    if (v === 1 || v === 4 || v === 7) {
      answer += "L";
      left = v;
    } else if (v === 3 || v === 6 || v === 9) {
      answer += "R";
      right = v;
    } else {
      let l = findHand(left);
      let r = findHand(right);
      let m = findHand(v);

      let rr = Math.abs(r[0] - m[0]) + Math.abs(r[1] - m[1]);
      let ll = Math.abs(l[0] - m[0]) + Math.abs(l[1] - m[1]);

      if (rr === ll) {
        if (hand === "right") (answer += "R"), (right = v);
        if (hand === "left") (answer += "L"), (left = v);
      } else if (rr > ll) {
        answer += "L";
        left = v;
      } else {
        answer += "R";
        right = v;
      }
    }
  });

  return answer;
};

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
console.log("LRLLLRLLRRL");
