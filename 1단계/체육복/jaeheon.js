function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  let lost2 = lost.filter((v) => !reserve.includes(v));
  let reserve2 = reserve.filter((v) => !lost.includes(v));

  let answer = n - lost2.length;

  lost2.forEach((l) => {
    for (let r of reserve2) {
      if ((r - l) ** 2 === 1) {
        answer++;
        reserve2.splice(reserve2.indexOf(r), 1);
        break;
      }
    }
  });

  return answer;
}
