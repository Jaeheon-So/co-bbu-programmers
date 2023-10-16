function solution(spell, dic) {
  for (let w of dic) {
    let flag = true;
    for (let s of spell) {
      if (!w.includes(s)) {
        flag = false;
        break;
      }
    }
    if (flag) return 1;
  }

  return 2;
}
