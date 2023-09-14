function solution(id_pw, db) {
  for (let x of db) {
    if (x[0] === id_pw[0] && x[1] === id_pw[1]) return "login";
    if (x[0] === id_pw[0]) return "wrong pw";
  }
  return "fail";
}
