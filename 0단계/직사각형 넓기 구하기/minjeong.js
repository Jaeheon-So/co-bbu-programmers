function solution(dots) {
  let answer = 0;
  const xDots = [dots[0][0], dots[1][0], dots[2][0], dots[3][0]];
  const yDots = [dots[0][1], dots[1][1], dots[2][1], dots[3][1]];
  const width = Math.max(...xDots) - Math.min(...xDots);
  const height = Math.max(...yDots) - Math.min(...yDots);
  answer = width * height;
  return answer;
}
