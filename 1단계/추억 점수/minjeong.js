function solution(name, yearning, photo) {
  var answer = [];
  for (let x of photo) {
    let score = 0;
    for (let y of x) {
      if (name.includes(y)) {
        const index = name.indexOf(y);
        score += yearning[index];
      }
    }
    answer.push(score);
  }
  return answer;
}
