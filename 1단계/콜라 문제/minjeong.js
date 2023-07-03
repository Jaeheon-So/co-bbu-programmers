function solution(a, b, n) {
  let answer = 0;
  let myCoke = n;
  while (myCoke >= a) {
    answer += parseInt(myCoke / a) * b;
    myCoke = parseInt(myCoke / a) * b + (myCoke % a);
  }
  return answer;
}
