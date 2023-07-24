function solution(babbling) {
  let answer = 0;
  let word = ["aya", "ye", "woo", "ma"];

  for (let b of babbling) {
    let before = "";
    let flag = true;

    while (b.length !== 0) {
      const babble = word.find((w) => !b.indexOf(w));
      if (babble && before !== babble) {
        b = b.substring(babble.length);
        before = babble;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }

  return answer;
}
