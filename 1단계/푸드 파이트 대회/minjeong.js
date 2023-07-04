function solution(food) {
  let answer = "";
  for (let i = 1; i < food.length; i += 1) {
    let car = parseInt(food[i] / 2);
    for (let j = 0; j < car; j += 1) {
      answer += i;
    }
  }
  answer = answer + "0" + answer.split("").reverse().join("");
  return answer;
}
