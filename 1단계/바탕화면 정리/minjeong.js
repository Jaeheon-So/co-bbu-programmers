function solution(wallpaper) {
  var answer = [];
  const x = [];
  const y = [];
  for (let i = 0; i < wallpaper.length; i += 1) {
    for (let j = 0; j < wallpaper[i].length; j += 1) {
      if (wallpaper[i][j] === "#") {
        x.push(j);
        y.push(i);
      }
    }
  }
  answer.push(Math.min(...y));
  answer.push(Math.min(...x));
  answer.push(Math.max(...y) + 1);
  answer.push(Math.max(...x) + 1);
  return answer;
}
