function solution(dots){
  var answer = 0;
  let arrX = dots.map(el => el[0])
  let arrY = dots.map(el => el[1])
  
  answer = (Math.max(...arrX) - Math.min(...arrX)) * (Math.max(...arrY) - Math.min(...arrY))
  
  return answer;
}