const solution = (s) => {
  let answer = 0;
  let temp = s.split("");
  let stack = [];
  let obj = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      stack.push(temp[j]);
    }
    temp.push(temp.shift());

    let rt = s.length - 1;
    let lt = rt - 1;

    while (rt > 0) {
      if (obj[stack[rt]] === stack[lt]) stack.splice(lt, 2);

      lt--;
      rt--;
    }

    if (!stack.length) answer++;
    stack = [];
  }

  return answer;
};
