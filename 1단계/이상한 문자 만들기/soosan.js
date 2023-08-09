const solution = (s) => {
  let answer = "";
  let lang = s.split(" ");

  for (let i = 0; i < lang.length; i++) {
    for (let j = 0; j < lang[i].length; j++) {
      if (j % 2) answer += lang[i][j].toLowerCase();
      else answer += lang[i][j].toUpperCase();
    }
    if (i !== lang.length - 1) answer += " ";
  }

  return answer;
};

console.log(solution("try hello world"));
