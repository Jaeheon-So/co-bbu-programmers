const solution = (n, lost, reserve) => {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  let Lost = lost.filter((v) => !reserve.includes(v));
  let Reserve = reserve.filter((v) => !lost.includes(v));
  let answer = n - Lost.length;

  Lost.forEach((v) => {
    for (let i = 0; i < Reserve.length; i++) {
      if (v - Reserve[i] === -1 || v - Reserve[i] === 1) {
        answer++;
        Reserve.splice(i, 1);
        break;
      }
    }
  });

  return answer;
};
