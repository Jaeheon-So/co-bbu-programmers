function solution(wallpaper) {
  let answer = [];
  const temp = []
  for (let i = 0; i < wallpaper.length; i += 1) {
    for (let j = 0; j < wallpaper[0].length; j += 1) {
      if (wallpaper[i][j] === '#') {
        temp.push([i, j])
      }
    }
  }
  answer[0] = temp[0][0]
  answer[2] = temp[temp.length - 1][0] + 1
  temp.sort((a, b) => a[1] - b[1]);
  answer[1] = temp[0][temp[0].length - 1]
  answer[3] = temp[temp.length - 1][1] + 1
  return answer;
}