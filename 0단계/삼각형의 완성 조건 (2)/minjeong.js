function solution(sides) {
  sides.sort((a, b) => a - b);
  let lec = [];
  for (let i = 1; i < sides[0] + sides[1]; i += 1) {
    if (sides[0] + i > sides[1] && i <= sides[1]) {
      lec.push(i);
    } else if (sides[0] + sides[1] > i && sides[1] < i) {
      lec.push(i);
    }
  }
  return lec.length;
}
