function solution(ingredient) {
  let stack = [];
  let answer = 0;

  ingredient.forEach((v) => {
    stack.push(v);
    if (stack.length > 3) {
      let temp = stack.slice(stack.length - 4, stack.length);
      if (temp.join("") === "1231") {
        answer++;
        stack.splice(stack.length - 4, 4);
      }
    }
  });

  return answer;
}
