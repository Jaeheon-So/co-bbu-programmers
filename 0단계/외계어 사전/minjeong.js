function solution(spell, dic) {
  let answer = 0;
  spell = spell.sort().join("");
  answer =
    dic.map((e) => e.split("").sort().join("")).find((e) => e === spell) !==
    undefined
      ? 1
      : 2;
  return answer;
}
