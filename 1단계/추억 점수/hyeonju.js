function solution(name, yearning, photo) {
  let answer = [];
  for (let i = 0; i < photo.length; i += 1) {
    let score = 0;
    for (let j = 0; j < photo[i].length; j += 1) {
      if (name.includes(photo[i][j])) {
        score += yearning[name.indexOf(photo[i][j])]
      }
    }
    answer.push(score)
  }
  return answer;
}
