function solution(wallpaper) {
  var answer = [];
  let X = []
  let Y = []
  for(let i = 0; i < wallpaper.length; i+=1){
      for(let j = 0; j < wallpaper[i].length; j+=1){
          if(wallpaper[i][j] === '#') X.push(i)
          if(wallpaper[i][j] === '#') Y.push(j)
      }
  }
  let Sx = Math.min(...X)    
  let Sy = Math.min(...Y)
  let Ex = Math.max(...X) + 1
  let Ey = Math.max(...Y) + 1
  return answer = [Sx, Sy, Ex, Ey]
}