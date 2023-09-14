function solution(id_pw, db) {
  let answer = "";
  const [id, pw] = id_pw;
  for (let x of db) {
    const [testID, testPW] = x;
    if (testID === id && testPW === pw) {
      answer = "login";
    } else if (testID === id && testPW !== pw) {
      answer = "wrong pw";
    } else if (testID !== id && testPW !== pw) {
      answer = "fail";
    }
  }
  return answer;
}
